import React from 'react';
import List from '@material-ui/core/List';

import { RedocContext } from '../../contexts/redoc';
import ListItemColor from '../list-item-color';
import ListItemInteger from '../list-item-integer';
import ListItemUnit from '../list-item-unit';
import ListItemDivider from '../list-item-divider';

export default () => {
  const redoc = React.useContext(RedocContext);
  return (
    <List dense component="nav" disablePadding>
      <ListItemDivider text="spacing" hideDivider />
      <ListItemInteger
        text="unit"
        value={redoc.theme.spacing.unit}
        onChange={value => redoc.themeSpacing('spacing', value)}
        nested
      />
      <ListItemInteger
        text="sectionHorizontal"
        value={redoc.theme.spacing.sectionHorizontal}
        onChange={value =>
          redoc.themeIntegerSingle('spacing.sectionHorizontal', value)
        }
        nested
      />
      <ListItemInteger
        text="sectionVertical"
        value={redoc.theme.spacing.sectionVertical}
        onChange={value =>
          redoc.themeIntegerSingle('spacing.sectionVertical', value)
        }
        nested
      />
      <ListItemDivider text="breakpoints" />
      {Object.keys(redoc.theme.breakpoints).map(key => (
        <ListItemUnit
          key={key}
          text={key}
          value={redoc.theme.breakpoints[key]}
          onChange={value => redoc.themeUnitSingle(`breakpoints.${key}`, value)}
          nested
        />
      ))}
      <ListItemDivider text="logo" />
      {Object.keys(redoc.theme.logo).map(key => (
        <ListItemUnit
          key={key}
          text={key}
          value={redoc.theme.logo[key]}
          onChange={value => redoc.themeUnitSingle(`logo.${key}`, value)}
          nested
        />
      ))}
      <ListItemDivider text="rightPanel" />
      <ListItemColor
        text="backgroundColor"
        color={redoc.theme.rightPanel.backgroundColor}
        onChange={value =>
          redoc.themeColorSingle('rightPanel.backgroundColor', value)
        }
        nested
      />
      <ListItemColor
        text="textColor"
        color={redoc.theme.rightPanel.textColor}
        onChange={value =>
          redoc.themeColorSingle('rightPanel.textColor', value)
        }
        nested
      />
      <ListItemUnit
        text="width"
        value={redoc.theme.rightPanel.width}
        onChange={value => redoc.themeUnitSingle('rightPanel.width', value)}
        nested
      />
      <ListItemDivider text="codeSample" />
      <ListItemColor
        text="backgroundColor"
        color={redoc.theme.codeSample.backgroundColor}
        onChange={value =>
          redoc.themeColorSingle('codeSample.backgroundColor', value)
        }
        nested
      />
    </List>
  );
};
