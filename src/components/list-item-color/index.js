import React from 'react';
import PropTypes from 'prop-types';

import ListItemBase from '../list-item-base';
import ColorPicker from '../color-picker';
import { toRgbaString } from '../../utils';

const ListItemColor = ({
  text,
  secondary,
  readable,
  nested,
  color,
  onChange,
}) => (
  <ListItemBase
    text={text}
    secondary={secondary}
    readable={readable}
    nested={nested}>
    <ColorPicker
      color={color}
      onChange={value => onChange(toRgbaString(value.rgb))}
    />
  </ListItemBase>
);

ListItemColor.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemColor.defaultProps = {
  text: 'COLOR',
  readable: true,
  nested: false,
  color: '#000000',
  onChange: () => {},
};

export default ListItemColor;
