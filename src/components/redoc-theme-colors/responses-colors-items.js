import React from 'react';

import { RedocContext } from '../../contexts/redoc';
import ListItemColorMultiple from '../list-item-color-multiple';

export default () => {
  const redoc = React.useContext(RedocContext);
  return Object.keys(redoc.theme.colors.responses).map(key => (
    <ListItemColorMultiple
      key={key}
      text={key}
      colors={redoc.theme.colors.responses[key]}
      props={['color', 'backgroundColor']}
      onChange={value =>
        redoc.themeColorBackground(`colors.responses.${key}`, value)
      }
      onChangeColor={(property, value) =>
        redoc.themeColorSingle(`colors.response.${key}.${property}`, value)
      }
    />
  ));
};
