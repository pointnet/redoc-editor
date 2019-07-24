import React from 'react';

import { RedocContext } from '../../contexts/redoc';
import ListItemColor from '../list-item-color';

export default () => {
  const redoc = React.useContext(RedocContext);
  return Object.keys(redoc.theme.colors.border).map(key => (
    <ListItemColor
      key={key}
      text={key}
      color={redoc.theme.colors.border[key]}
      onChange={value => redoc.themeColorSingle(`colors.border.${key}`, value)}
      nested
    />
  ));
};
