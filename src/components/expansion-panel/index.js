import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CustomScrollbars from '../custom-scrollbars';

const useStyles = makeStyles({
  uppercase: {
    textTransform: 'uppercase',
  },
});

const CustomExpansionPanel = ({ expanded, children, headerText, onChange }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel
      elevation={0}
      square
      expanded={expanded}
      onChange={onChange}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        IconButtonProps={{ color: 'inherit', edge: 'start' }}>
        <Typography
          className={classes.uppercase}
          color="textPrimary"
          variant="caption">
          {headerText}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <CustomScrollbars>{children}</CustomScrollbars>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

CustomExpansionPanel.propTypes = {
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.element,
  headerText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CustomExpansionPanel.defaultProps = {
  expanded: false,
  headerText: 'HEADER TEXT',
  onChange: () => {},
};

export default CustomExpansionPanel;
