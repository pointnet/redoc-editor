import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { toReadableString } from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    height: 28,
    minHeight: 28,
    display: 'flex',
    alignItems: 'center',
  },
  dividerFullWidth: {
    margin: `0 0 0 ${theme.spacing(2)}px`,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const CustomDivider = ({ text, readable, hideDivider }) => {
  const classes = useStyles();
  return [
    hideDivider ? null : <Divider key="divider" component="div" />,
    <Box key="text" className={classes.root}>
      <Typography
        className={classes.dividerFullWidth}
        color="primary"
        display="block"
        variant="caption">
        {readable ? toReadableString(text) : text}
      </Typography>
    </Box>,
  ];
};

CustomDivider.propTypes = {
  text: PropTypes.string.isRequired,
  readable: PropTypes.bool.isRequired,
  hideDivider: PropTypes.bool.isRequired,
};

CustomDivider.defaultProps = {
  text: 'DIVIDER',
  readable: true,
  hideDivider: false,
};

export default CustomDivider;
