import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import SettingsIcon from '@material-ui/icons/Settings';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';

import ListItemIcon from './sidebar-list-item-icon';
import ListItem from './sidebar-list-item';
import RedocPanelSettings from '../redoc-panel-settings';
import RedocPanelTheme from '../redoc-panel-theme';
import useToggle from '../../hooks/use-toggle';
import { gaEvent } from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SIDEBARS = {
  NONE: 'none',
  SETTINGS: 'settings',
  THEME: 'theme',
};

export default () => {
  const classes = useStyles();
  const [selected, toggle] = useToggle(SIDEBARS.NONE);
  const components = [
    <Box key="sidebar" className={classes.root}>
      <List dense disablePadding>
        <ListItem
          button
          selected={selected === SIDEBARS.SETTINGS}
          onClick={() => {
            if (selected !== SIDEBARS.SETTINGS) {
              gaEvent('navigation', 'settings', 'general');
            }
            toggle(SIDEBARS.SETTINGS);
          }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          selected={selected === SIDEBARS.THEME}
          onClick={() => {
            if (selected !== SIDEBARS.THEME) {
              gaEvent('navigation', 'theme', 'general');
            }
            toggle(SIDEBARS.THEME);
          }}>
          <ListItemIcon>
            <FormatPaintIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>,
  ];
  if (selected === SIDEBARS.SETTINGS) {
    components.push(<RedocPanelSettings key="settings" />);
  }
  if (selected === SIDEBARS.THEME) {
    components.push(<RedocPanelTheme key="theme" />);
  }
  return components;
};
