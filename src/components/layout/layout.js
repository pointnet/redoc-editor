import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { RedocContext } from '../../contexts/redoc';
import HeaderMenu from '../header-menu';
import HeaderTabs from '../header-tabs';
import PageHtml from '../page-html';
import PageShare from '../page-share';
import Sidebar from '../sidebar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    marginRight: 9,
  },
  grid: {
    flexGrow: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    flexGrow: 1,
    display: 'flex',
    borderBottom: `solid ${theme.spacing(1)}px ${theme.palette.primary.dark}`,
    borderRight: `solid ${theme.spacing(1)}px ${theme.palette.primary.dark}`,
    position: 'relative',
  },
  iframe: {
    flexGrow: 1,
    display: props => (props.path === '/' ? 'block' : 'none'),
    border: 'none',
    height: '100%'
  },
}));

const Layout = ({ path }) => {
  const classes = useStyles({ path });
  const redoc = React.useContext(RedocContext);
  const encoded = redoc.getConfig(true);
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <HeaderMenu />
      <Grid container className={classes.grid} spacing={0}>
        <Route path="/" component={Sidebar} />
        <Box className={classes.container}>
          <Route path="/" component={HeaderTabs} />
          <Box className={classes.wrapper}>
            <iframe
              title="redoc"
              className={classes.iframe}
              src={`./redoc.html?config=${encoded}`}
            />
            <PageHtml path={path} />
            <PageShare path={path} />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

Layout.propTypes = {
  path: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  path: '/',
};

export default Layout;
