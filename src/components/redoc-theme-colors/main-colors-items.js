import React from 'react';

import { RedocContext } from '../../contexts/redoc';
import ListItemColorMultiple from '../list-item-color-multiple';

const TONE_COLORS = ['primary', 'success', 'warning', 'error'];

export default () => {
  const redoc = React.useContext(RedocContext);
  return TONE_COLORS.map(color => (
    <ListItemColorMultiple
      key={color}
      text={color}
      colors={redoc.theme.colors[color]}
      props={['main', 'light', 'dark', 'contrastText']}
      onChange={value => redoc.themeColorTone(`colors.${color}`, value)}
      onChangeColor={(property, value) =>
        redoc.themeColorSingle(`colors.${color}.${property}`, value)
      }
    />
  )).concat(
    <ListItemColorMultiple
      key="text"
      text="text"
      colors={redoc.theme.colors.text}
      props={['primary', 'secondary']}
      onChange={value => redoc.themeColorText('colors.text', value)}
      onChangeColor={(property, value) =>
        redoc.themeColorSingle(`colors.text.${property}`, value)
      }
    />,
    <ListItemColorMultiple
      key="links"
      text="links"
      colors={redoc.theme.typography.links}
      props={['color', 'visited', 'hover']}
      onChange={value => redoc.themeColorLinks('typography.links', value)}
      onChangeColor={(property, value) =>
        redoc.themeColorSingle(`typography.links.${property}`, value)
      }
    />
  );
};
