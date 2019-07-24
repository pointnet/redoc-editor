import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '../expansion-panel';
import { gaEvent, toReadableString } from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    width: 300,
    borderTop: `solid ${theme.spacing(1)}px ${theme.palette.primary.dark}`,
    borderBottom: `solid ${theme.spacing(1)}px ${theme.palette.primary.dark}`,
    borderRight: `solid ${theme.spacing(1)}px ${theme.palette.primary.dark}`,
  },
}));

const SidebarPanel = ({
  title,
  sections,
  defaultSection,
  action,
  gaAction,
}) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(defaultSection);
  return (
    <Box className={classes.root}>
      <List
        dense
        disablePadding
        subheader={
          <ListSubheader>
            <Typography color="textPrimary" variant="caption">
              {title}
            </Typography>
            {action}
          </ListSubheader>
        }>
        <ListItem alignItems="flex-start" disableGutters>
          {sections.map(sections => (
            <ExpansionPanel
              key={sections.key}
              expanded={selected === sections.key}
              onChange={() => {
                if (selected !== sections.key) {
                  gaEvent('navigation', gaAction, sections.key);
                }
                setSelected(sections.key);
              }}
              headerText={toReadableString(sections.key)}>
              {selected === sections.key ? sections.component : null}
            </ExpansionPanel>
          ))}
        </ListItem>
      </List>
    </Box>
  );
};

SidebarPanel.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.element,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      component: PropTypes.element,
    })
  ).isRequired,
  defaultSection: PropTypes.string.isRequired,
  gaAction: PropTypes.oneOf(['settings', 'theme']).isRequired,
};

SidebarPanel.defaultProps = {
  action: null,
  title: 'PANEL',
  sections: [{ key: 'general', component: null }],
  defaultSection: 'general',
};

export default SidebarPanel;
