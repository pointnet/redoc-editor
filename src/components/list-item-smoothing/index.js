import React from 'react';
import PropTypes from 'prop-types';

import ListItemSelect from '../list-item-select';

const VALUES = ['auto', 'none', 'antialiased', 'subpixel-antialiased'];

const ListItemSmoothing = ({
  text,
  secondary,
  readable,
  nested,
  value,
  onChange,
}) => {
  return (
    <ListItemSelect
      text={text}
      secondary={secondary}
      readable={readable}
      value={value}
      nested={nested}
      items={VALUES}
      onChange={onChange}
    />
  );
};

ListItemSmoothing.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  value: PropTypes.oneOf(VALUES).isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemSmoothing.defaultProps = {
  text: 'SMOOTHING',
  readable: true,
  nested: false,
  value: 'inherit',
  onChange: () => {},
};

export default ListItemSmoothing;
