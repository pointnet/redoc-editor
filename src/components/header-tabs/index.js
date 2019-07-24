import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  colorDefault: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const TABS = [
  { key: 'preview', value: '/' },
  { key: 'html', value: '/html' },
  { key: 'share', value: '/share' },
];

export default ({ location: { pathname }, history: { push } }) => {
  const classes = useStyles();
  return (
    <AppBar classes={classes} position="static" elevation={0} color="default">
      <Toolbar variant="dense" disableGutters>
        <Tabs
          textColor="inherit"
          value={pathname}
          onChange={(evt, value) => {
            if (pathname !== value) {
              push(value);
            }
          }}>
          {TABS.map(tab => (
            <Tab
              key={tab.key}
              label={tab.key}
              value={tab.value}
              data-ga-event-category="navigation"
              data-ga-event-action={tab.key}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
