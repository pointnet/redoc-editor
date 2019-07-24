import React from 'react';
import List from '@material-ui/core/List';

import { RedocContext } from '../../contexts/redoc';
import ListItemBoolean from '../list-item-boolean';
import { redocOptions } from '../../utils';
import ListItemColor from '../list-item-color';

export default () => {
  const redoc = React.useContext(RedocContext);
  return (
    <List dense component="nav">
      <ListItemColor
        text="backgroundColor"
        color={redoc.backgroundColor}
        onChange={color => redoc.settingsBackgroundColor(color)}
      />
      {redocOptions.map(option => (
        <ListItemBoolean
          key={option.text}
          text={option.text}
          checked={redoc.options.indexOf(option.property) !== -1}
          onChange={() => redoc.settingsOption(option.property)}
        />
      ))}
    </List>
  );
};
