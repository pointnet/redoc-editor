import React from 'react';
import PropTypes from 'prop-types';

import ListItemSelect from '../list-item-select';

const VALUES = [
  'capitalize',
  'inherit',
  'initial',
  'lowercase',
  'none',
  'unset',
  'uppercase',
];

const ListItemTextTransform = ({
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

ListItemTextTransform.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  value: PropTypes.oneOf(VALUES).isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemTextTransform.defaultProps = {
  text: 'TEXT TRANSFORM',
  readable: true,
  nested: false,
  value: 'inherit',
  onChange: () => {},
};

export default ListItemTextTransform;
