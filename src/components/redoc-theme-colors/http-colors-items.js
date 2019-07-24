import React from 'react';

import { RedocContext } from '../../contexts/redoc';
import ListItemColor from '../list-item-color';

export default () => {
  const redoc = React.useContext(RedocContext);
  return Object.keys(redoc.theme.colors.http).map(key => (
    <ListItemColor
      key={key}
      text={key}
      color={redoc.theme.colors.http[key]}
      onChange={value => redoc.themeColorSingle(`colors.http.${key}`, value)}
      nested
    />
  ));
};
