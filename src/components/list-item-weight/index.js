import React from 'react';
import PropTypes from 'prop-types';

import ListItemSelect from '../list-item-select';

const VALUES = [
  'normal',
  'bold',
  'bolder',
  'lighter',
  'initial',
  'inherit',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const ListItemWeight = ({
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

ListItemWeight.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  value: PropTypes.oneOf(VALUES).isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemWeight.defaultProps = {
  text: 'WEIGHT',
  readable: true,
  nested: false,
  value: 'inherit',
  onChange: () => {},
};

export default ListItemWeight;
