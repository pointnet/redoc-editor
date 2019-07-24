import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Popover from 'react-popover';
import { SketchPicker } from 'react-color';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    cursor: 'pointer',
  },
  selected: {
    width: 36,
    height: 14,
    borderRadius: 2,
    border: `solid 1px ${theme.palette.primary.dark}`,
    backgroundColor: props => props.color,
  },
  popover: {
    zIndex: 10000,
  },
}));

const ColorPicker = ({ color, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ color });
  const display = evt => {
    evt.stopPropagation();
    setOpen(!open);
  };
  if (open) {
    return (
      <Popover
        className={classes.popover}
        preferPlace="right"
        isOpen
        body={
          <SketchPicker
            color={color}
            onChange={(color, evt) => {
              evt.stopPropagation();
            }}
            onChangeComplete={color => {
              setOpen(false);
              onChange(color);
            }}
          />
        }
        onOuterAction={() => setOpen(false)}>
        <Box className={classes.root} onClick={display}>
          <Box className={classes.selected} />
        </Box>
      </Popover>
    );
  }
  return (
    <Box className={classes.root} onClick={display}>
      <Box className={classes.selected} />
    </Box>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ColorPicker.defaultProps = {
  color: '#FFFFFF',
  onChange: () => {},
};

export default ColorPicker;
