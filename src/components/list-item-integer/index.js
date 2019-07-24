import React from 'react';
import PropTypes from 'prop-types';
import { string } from 'yup';

import ListItemInput from '../list-item-input';

const schema = string()
  .required('is required')
  .matches(/^\d+$/g, 'must be a positive integer');

const ListItemInteger = ({
  text,
  secondary,
  readable,
  nested,
  value,
  onChange,
}) => {
  return (
    <ListItemInput
      text={text}
      secondary={secondary}
      readable={readable}
      value={value}
      nested={nested}
      onChange={value => onChange(parseInt(value, 10))}
      width={50}
      schema={schema}
    />
  );
};

ListItemInteger.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemInteger.defaultProps = {
  text: 'INTEGER',
  readable: true,
  nested: false,
  value: 0,
  onChange: () => {},
};

export default ListItemInteger;
