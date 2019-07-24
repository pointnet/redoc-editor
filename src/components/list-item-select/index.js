import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemBase from '../list-item-base';

const StyledTextField = withStyles({
  root: {
    width: 'auto',
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  select: {
    fontSize: 12,
    padding: `${theme.spacing(0.5)}px 0`,
  },
  icon: {
    display: 'none',
  },
  paper: {
    backgroundColor: theme.palette.primary.light,
  },
  item: {
    minHeight: 'unset',
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: 12,
  },
}));

const ListItemSelect = ({
  text,
  secondary,
  readable,
  nested,
  value,
  items,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <ListItemBase
      text={text}
      secondary={secondary}
      readable={readable}
      nested={nested}>
      <FormControl>
        <StyledTextField
          select
          value={value}
          InputProps={{ disableUnderline: true }}
          SelectProps={{
            classes: {
              root: classes.select,
              icon: classes.icon,
            },
            MenuProps: {
              MenuListProps: {
                dense: true,
              },
              classes: {
                paper: classes.paper,
              },
            },
          }}
          onChange={evt => onChange(evt.target.value)}>
          {items.map(item => (
            <MenuItem
              key={item}
              className={classes.item}
              value={item}
              dense
              disableGutters>
              {item}
            </MenuItem>
          ))}
        </StyledTextField>
      </FormControl>
    </ListItemBase>
  );
};

ListItemSelect.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemSelect.defaultProps = {
  text: 'SELECT',
  readable: true,
  nested: false,
  value: 'none',
  items: ['none'],
  onChange: () => {},
};

export default ListItemSelect;
