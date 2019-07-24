import React from 'react';
import List from '@material-ui/core/List';

import { RedocContext } from '../../contexts/redoc';
import ListItemBoolean from '../list-item-boolean';
import ListItemDivider from '../list-item-divider';
import { expandResponses } from '../../utils';

export default () => {
  const redoc = React.useContext(RedocContext);
  return (
    <List dense component="nav" disablePadding>
      <ListItemBoolean
        text="all"
        checked={redoc.expandResponses.indexOf('all') !== -1}
        onChange={value => redoc.settingsExpandResponses('all')}
      />
      {Object.keys(expandResponses).map(key => {
        const components = [<ListItemDivider key={key} text={key} />];
        Object.keys(expandResponses[key]).forEach(inner => {
          components.push(
            <ListItemBoolean
              key={`${key}-${inner}`}
              text={inner}
              secondary={expandResponses[key][inner]}
              checked={redoc.expandResponses.indexOf(inner) !== -1}
              readable={false}
              onChange={value => redoc.settingsExpandResponses(inner)}
            />
          );
        });
        return components;
      })}
    </List>
  );
};
