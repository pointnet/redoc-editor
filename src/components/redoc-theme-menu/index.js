import React from 'react';
import List from '@material-ui/core/List';

import { RedocContext } from '../../contexts/redoc';
import ListItemColor from '../list-item-color';
import ListItemTextTransform from '../list-item-text-transform';
import ListItemUnit from '../list-item-unit';
import ListItemDivider from '../list-item-divider';

export default () => {
  const redoc = React.useContext(RedocContext);
  return (
    <List dense component="nav" disablePadding>
      <ListItemUnit
        text="width"
        value={redoc.theme.menu.width}
        onChange={value => redoc.themeUnitSingle('menu.width', value)}
      />
      <ListItemColor
        text="backgroundColor"
        color={redoc.theme.menu.backgroundColor}
        onChange={value =>
          redoc.themeColorSingle('menu.backgroundColor', value)
        }
      />
      <ListItemColor
        text="textColor"
        color={redoc.theme.menu.textColor}
        onChange={value => redoc.themeColorSingle('menu.textColor', value)}
      />
      <ListItemTextTransform
        text="groupTextTransform"
        value={redoc.theme.menu.groupItems.textTransform}
        onChange={value =>
          redoc.themeUnitSingle('menu.groupItems.textTransform', value)
        }
      />
      <ListItemTextTransform
        text="level1TextTransform"
        value={redoc.theme.menu.level1Items.textTransform}
        onChange={value =>
          redoc.themeUnitSingle('menu.level1Items.textTransform', value)
        }
      />
      <ListItemDivider text="arrow" />
      <ListItemUnit
        text="size"
        value={redoc.theme.menu.arrow.size}
        onChange={value => redoc.themeUnitSingle('menu.arrow.size', value)}
        nested
      />
      <ListItemColor
        text="color"
        color={redoc.theme.menu.arrow.color}
        onChange={value => redoc.themeColorSingle('menu.arrow.color', value)}
        nested
      />
    </List>
  );
};
