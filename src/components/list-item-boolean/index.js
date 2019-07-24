import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import ListItemBase from '../list-item-base';

const StyledSwitch = withStyles({ edgeEnd: { marginRight: -11 } })(Switch);

const ListItemBoolean = ({
  text,
  secondary,
  readable,
  nested,
  checked,
  onChange,
}) => {
  return (
    <ListItemBase
      text={text}
      secondary={secondary}
      readable={readable}
      nested={nested}>
      <StyledSwitch
        edge="end"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
    </ListItemBase>
  );
};

ListItemBoolean.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

ListItemBoolean.defaultProps = {
  text: 'BOOLEAN',
  readable: true,
  nested: false,
  checked: false,
  onChange: () => {},
};

export default ListItemBoolean;
