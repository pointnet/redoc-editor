import React from 'react';
import { string } from 'yup';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GithubIcon from 'mdi-material-ui/GithubCircle';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

import { RedocContext } from '../../contexts/redoc';

const yupUrlSchema = string()
  .required('SPEC URL is required')
  .trim()
  .required('SPEC URL is required')
  .url('SPEC URL mus be a valid URL');

const StyledInput = withStyles({
  root: {
    fontSize: 12,
  },
})(Input);

const useStyles = makeStyles(theme => ({
  logo: { marginLeft: 9, marginRight: theme.spacing(2), display: 'flex' },
  text: { textTransform: 'uppercase' },
  url: { flexGrow: 1, marginLeft: `${theme.spacing(1)}px` },
  github: {
    color: theme.palette.primary.contrastText,
    display: 'flex',
    marginLeft: `${theme.spacing(1)}px`,
    marginRight: `${theme.spacing(1)}px`,
  },
}));

export default () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const redoc = React.useContext(RedocContext);
  const [state, setState] = React.useState(redoc.specUrl);
  React.useEffect(() => {
    setState(redoc.specUrl);
  }, [redoc.specUrl]);
  const setSpecUrl = () => {
    if (state !== redoc.specUrl) {
      yupUrlSchema
        .validate(state)
        .then(url => axios.head(url))
        .then(response => {
          if (response.headers && response.headers['content-type']) {
            const contentType = response.headers['content-type'];
            if (
              contentType.indexOf('application/json') !== -1 ||
              contentType.indexOf('yaml') !== -1
            ) {
              redoc.settingsSpecUrl(response.config.url);
            } else {
              enqueueSnackbar(`Invalid Content-Type (${contentType})`, {
                variant: 'error',
              });
              setState(redoc.specUrl);
            }
          } else {
            enqueueSnackbar(`Invalid Content-Type`, {
              variant: 'error',
            });
            setState(redoc.specUrl);
          }
        })
        .catch(error => {
          enqueueSnackbar(error.message, { variant: 'error' });
          setState(redoc.specUrl);
        });
    }
  };
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar variant="dense">
        <Link
          className={classes.logo}
          href="https://github.com/Redocly/redoc"
          target="_blank"
          rel="noopener"
          underline="none"
          data-ga-event-category="navigation"
          data-ga-event-action="external"
          data-ga-event-label="redoc">
          <img alt="logo" src="./logo.png" width="16" height="16" />
        </Link>
        <Typography
          className={classes.text}
          variant="caption"
          color="textPrimary">
          SPEC URL:
        </Typography>
        <FormControl className={classes.url}>
          <StyledInput
            value={state}
            inputProps={{
              spellCheck: false,
              autoComplete: 'off',
              autoCorrect: 'off',
              autoCapitalize: 'off',
            }}
            onChange={evt => setState(evt.target.value)}
            disableUnderline
          />
        </FormControl>
        <Button size="small" color="default" onClick={setSpecUrl}>
          LOAD
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => redoc.resetSpecUrl()}>
          RESET
        </Button>
        <Link
          className={classes.github}
          href="https://github.com/pointnet/redoc-editor"
          target="_blank"
          rel="noopener"
          underline="none"
          data-ga-event-category="navigation"
          data-ga-event-action="external"
          data-ga-event-label="github">
          <GithubIcon />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
