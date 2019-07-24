import React from 'react';
import List from '@material-ui/core/List';

import { RedocContext } from '../../contexts/redoc';
import ListItemColor from '../list-item-color';
import ListItemUnit from '../list-item-unit';
import ListItemDivider from '../list-item-divider';

export default () => {
  const redoc = React.useContext(RedocContext);
  return (
    <List dense component="nav" disablePadding>
      <ListItemColor
        text="linesColor"
        color={redoc.theme.schema.linesColor}
        onChange={value => redoc.themeColorSingle('schema.linesColor', value)}
      />
      <ListItemUnit
        text="defaultDetailsWidth"
        value={redoc.theme.schema.defaultDetailsWidth}
        onChange={value =>
          redoc.themeUnitSingle('schema.defaultDetailsWidth', value)
        }
      />
      <ListItemColor
        text="typeNameColor"
        color={redoc.theme.schema.typeNameColor}
        onChange={value =>
          redoc.themeColorSingle('schema.typeNameColor', value)
        }
      />
      <ListItemColor
        text="typeTitleColor"
        color={redoc.theme.schema.typeTitleColor}
        onChange={value =>
          redoc.themeColorSingle('schema.typeTitleColor', value)
        }
      />
      <ListItemColor
        text="requireLabelColor"
        color={redoc.theme.schema.requireLabelColor}
        onChange={value =>
          redoc.themeColorSingle('schema.requireLabelColor', value)
        }
      />
      <ListItemUnit
        text="labelsTextSize"
        value={redoc.theme.schema.labelsTextSize}
        onChange={value =>
          redoc.themeUnitSingle('schema.labelsTextSize', value)
        }
      />
      <ListItemUnit
        text="nestingSpacing"
        value={redoc.theme.schema.nestingSpacing}
        onChange={value =>
          redoc.themeUnitSingle('schema.nestingSpacing', value)
        }
      />
      <ListItemColor
        text="nestedBackground"
        color={redoc.theme.schema.nestedBackground}
        onChange={value =>
          redoc.themeColorSingle('schema.nestedBackground', value)
        }
      />
      <ListItemDivider text="arrow" />
      <ListItemUnit
        text="size"
        value={redoc.theme.schema.arrow.size}
        onChange={value => redoc.themeUnitSingle('schema.arrow.size', value)}
        nested
      />
      <ListItemColor
        text="color"
        color={redoc.theme.schema.arrow.color}
        onChange={value => redoc.themeColorSingle('schema.arrow.color', value)}
        nested
      />
    </List>
  );
};
