import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

import ListItem from '../panel-list-item';
import { toReadableString } from '../../utils';

const StyledExpandLessIcon = withStyles({
  root: { transform: 'rotate(90deg)' },
  fontSizeSmall: { fontSize: '0.9em', marginLeft: -3, marginRight: 7 },
})(PlayArrowIcon);

const StyledExpandMoreIcon = withStyles({
  fontSizeSmall: { fontSize: '0.9em', marginLeft: -3, marginRight: 7 },
})(PlayArrowOutlinedIcon);

const ListItemBase = ({
  text,
  secondary,
  readable,
  nested,
  children,
  multiple,
  open,
  onClick,
  primaryTypographyProps,
  secondaryTypographyProps,
  className,
}) => {
  const props = multiple ? { button: true, onClick } : { nested };
  const textProps = className ? { className } : {};
  return (
    <ListItem component="div" {...props}>
      {multiple && open && <StyledExpandLessIcon fontSize="small" />}
      {multiple && !open && <StyledExpandMoreIcon fontSize="small" />}
      <ListItemText
        {...textProps}
        primary={readable ? toReadableString(text) : text}
        primaryTypographyProps={primaryTypographyProps}
        secondary={
          secondary && readable ? toReadableString(secondary) : secondary
        }
        secondaryTypographyProps={secondaryTypographyProps}
      />
      {children}
    </ListItem>
  );
};

ListItemBase.propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  readable: PropTypes.bool.isRequired,
  nested: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  primaryTypographyProps: PropTypes.object.isRequired,
  secondaryTypographyProps: PropTypes.object.isRequired,
  className: PropTypes.string,
};

ListItemBase.defaultProps = {
  text: 'ITEM',
  readable: true,
  nested: false,
  multiple: false,
  open: false,
  onClick: () => {},
  primaryTypographyProps: { variant: 'caption', color: 'textPrimary' },
  secondaryTypographyProps: { variant: 'caption', color: 'textSecondary' },
};

export default ListItemBase;
