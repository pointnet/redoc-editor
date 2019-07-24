import React from 'react';
import List from '@material-ui/core/List';

import { RedocContext } from '../../contexts/redoc';
import ListItemBoolean from '../list-item-boolean';
import ListItemColor from '../list-item-color';
import ListItemSmoothing from '../list-item-smoothing';
import ListItemUnit from '../list-item-unit';
import ListItemWeight from '../list-item-weight';
import ListItemDivider from '../list-item-divider';

export default () => {
  const redoc = React.useContext(RedocContext);
  return (
    <List dense component="nav" disablePadding>
      <ListItemUnit
        text="fontSize"
        value={redoc.theme.typography.fontSize}
        onChange={value => redoc.themeUnitSingle('typography.fontSize', value)}
      />
      <ListItemUnit
        text="lineHeight"
        value={redoc.theme.typography.lineHeight}
        onChange={value =>
          redoc.themeUnitSingle('typography.lineHeight', value)
        }
      />
      <ListItemWeight
        text="fontWeightRegular"
        value={redoc.theme.typography.fontWeightRegular}
        onChange={value =>
          redoc.themeUnitSingle('typography.fontWeightRegular', value)
        }
      />
      <ListItemWeight
        text="fontWeightBold"
        value={redoc.theme.typography.fontWeightBold}
        onChange={value =>
          redoc.themeUnitSingle('typography.fontWeightBold', value)
        }
      />
      <ListItemWeight
        text="fontWeightLight"
        value={redoc.theme.typography.fontWeightLight}
        onChange={value =>
          redoc.themeUnitSingle('typography.fontWeightLight', value)
        }
      />
      <ListItemSmoothing
        text="smoothing"
        value={redoc.theme.typography.smoothing}
        onChange={value => redoc.themeUnitSingle('typography.smoothing', value)}
      />
      <ListItemBoolean
        text="optimizeSpeed"
        checked={redoc.theme.typography.optimizeSpeed}
        onChange={value => {
          redoc.themeBooleanSingle('typography.optimizeSpeed', value);
        }}
      />
      <ListItemDivider text="headings" />
      <ListItemWeight
        text="fontWeight"
        value={redoc.theme.typography.headings.fontWeight}
        onChange={value =>
          redoc.themeUnitSingle('typography.headings.fontWeight', value)
        }
        nested
      />
      <ListItemUnit
        text="lineHeight"
        value={redoc.theme.typography.headings.lineHeight}
        onChange={value =>
          redoc.themeUnitSingle('typography.headings.lineHeight', value)
        }
        nested
      />
      <ListItemDivider text="code" />
      <ListItemUnit
        text="fontSize"
        value={redoc.theme.typography.code.fontSize}
        onChange={value =>
          redoc.themeUnitSingle('typography.code.fontSize', value)
        }
        nested
      />
      <ListItemUnit
        text="lineHeight"
        value={redoc.theme.typography.code.lineHeight}
        onChange={value =>
          redoc.themeUnitSingle('typography.code.lineHeight', value)
        }
        nested
      />
      <ListItemWeight
        text="fontWeight"
        value={redoc.theme.typography.code.fontWeight}
        onChange={value =>
          redoc.themeUnitSingle('typography.code.fontWeight', value)
        }
        nested
      />
      <ListItemColor
        text="color"
        color={redoc.theme.typography.code.color}
        onChange={value =>
          redoc.themeColorSingle('typography.code.color', value)
        }
        nested
      />
      <ListItemColor
        text="backgroundColor"
        color={redoc.theme.typography.code.backgroundColor}
        onChange={value =>
          redoc.themeColorSingle('typography.code.backgroundColor', value)
        }
        nested
      />
      <ListItemBoolean
        text="wrap"
        checked={redoc.theme.typography.code.wrap}
        onChange={value => {
          redoc.themeBooleanSingle('typography.code.wrap', value);
        }}
        nested
      />
    </List>
  );
};
