import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import amber from '@material-ui/core/colors/amber';
import Link from '@material-ui/core/Link';
import WarningIcon from '@material-ui/icons/Warning';

import { RedocContext } from '../../contexts/redoc';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: props => (props.path === '/share' ? 'block' : 'none'),
    backgroundColor: theme.palette.primary.light,
    flexGrow: 1,
    padding: `${theme.spacing(1)}px`,
  },
  warning: {
    backgroundColor: amber[700],
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    wordBreak: 'break-all',
    marginBottom: `${theme.spacing(2)}px`,
  },
  icon: {
    marginRight: `${theme.spacing(2)}px`,
  },
}));

const PageShare = ({ path }) => {
  const classes = useStyles({ path });
  const redoc = React.useContext(RedocContext);
  const encoded = redoc.getConfig(true);
  return (
    <Box className={classes.root}>
      <Card>
        <CardHeader
          title="SHARE LINK"
          titleTypographyProps={{ variant: 'h6' }}
          subheader="share you work with others, this will include spec url, settings and theme"
        />
        <CardContent>
          <Box className={classes.wrapper}>
            <Link
              href={`${process.env.REACT_APP_BASE_URL}/#/?config=${encoded}`}
              target="_blank"
              rel="noopener"
              underline="none">
              {`${process.env.REACT_APP_BASE_URL}/#/?config=${encoded.substring(
                0,
                48
              )}...`}
            </Link>
          </Box>
          <Paper className={classes.warning}>
            <WarningIcon className={classes.icon} />
            <Typography variant="body2">
              UNTRUSTED SPEC will always be TRUE when sharing your work with
              others
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
};

PageShare.propTypes = {
  path: PropTypes.string.isRequired,
};

PageShare.defaultProps = {
  path: '/',
};

export default PageShare;
