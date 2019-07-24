import React from 'react';
import PropTypes from 'prop-types';
import { string } from 'yup';

import ListItemInput from '../list-item-input';

const schema = string()
  .required('is required')
  .matches(
    /^\d+\.?\d*(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|%)$/g,
    'must be a valid css unit (cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|%)'
  );

const ListItemUnit = ({
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
      onChange={onChange}
      width={50}
      schema={schema}
    />
  );
};

ListItemUnit.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemUnit.defaultProps = {
  text: 'UNIT',
  readable: true,
  nested: false,
  value: '100%',
  onChange: () => {},
};

export default ListItemUnit;
