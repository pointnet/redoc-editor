import React from 'react';
import { string } from 'yup';
import List from '@material-ui/core/List';

import { RedocContext } from '../../contexts/redoc';
import ListItemInput from '../list-item-input';

const schema = string().required('is required');

export default () => {
  const redoc = React.useContext(RedocContext);
  return (
    <List dense component="nav" disablePadding>
      {Object.keys(redoc.labels).map(key => (
        <ListItemInput
          key={key}
          text={key}
          value={redoc.labels[key]}
          onChange={value => redoc.settingsLabel(key, value)}
          width={130}
          schema={schema}
        />
      ))}
    </List>
  );
};
