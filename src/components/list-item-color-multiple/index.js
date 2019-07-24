import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import { CustomScrollbarsContext } from '../../contexts/custom-scrollbars';
import ListItemBase from '../list-item-base';
import ColorPicker from '../color-picker';
import { toRgbaString } from '../../utils';

const useStyles = makeStyles(theme => ({
  list: { height: 'auto' },
  nested: { color: theme.palette.primary.dark },
  nestedTypography: { fontWeight: 'bolder' },
}));

const ListItemColorMultiple = ({
  text,
  secondary,
  readable,
  colors,
  props,
  onChange,
  onChangeColor,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const scrollbars = React.useContext(CustomScrollbarsContext);
  const components = [
    <ListItemBase
      key="tone"
      multiple
      open={open}
      onClick={evt => {
        setOpen(!open);
        scrollbars.update();
      }}
      text={text}
      secondary={secondary}
      readable={readable}>
      <ColorPicker
        color={colors[props[0]]}
        onChange={value => onChange(toRgbaString(value.rgb))}
      />
    </ListItemBase>,
  ];
  if (open && props.length > 1) {
    components.push(
      <List key="collapse" dense component="nav" disablePadding className={classes.list}>
        {props.map(prop => (
          <ListItemBase
            key={prop}
            text={prop}
            readable={readable}
            nested
            className={classes.nested}
            primaryTypographyProps={{
              variant: 'caption',
              color: 'primary',
              classes: { root: classes.nestedTypography },
            }}>
            <ColorPicker
              color={colors[prop]}
              onChange={value => onChangeColor(prop, toRgbaString(value.rgb))}
            />
          </ListItemBase>
        ))}
      </List>
    );
  }
  return components;
};

ListItemColorMultiple.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  colors: PropTypes.object.isRequired,
  props: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

ListItemColorMultiple.defaultProps = {
  text: 'COLORS',
  readable: true,
  colors: { primary: '#333333' },
  props: ['primary'],
  onChange: () => {},
  onChangeColor: () => {},
};

export default ListItemColorMultiple;
