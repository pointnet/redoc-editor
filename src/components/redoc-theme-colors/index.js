import React from 'react';
import List from '@material-ui/core/List';

import BordersColorsItems from './borders-colors-items';
import HttpColorsItems from './http-colors-items';
import MainColorsItem from './main-colors-items';
import ResponsesColorsItem from './responses-colors-items';
import ListItemDivider from '../list-item-divider';

export default () => (
  <List dense component="nav" disablePadding>
    <MainColorsItem />
    <ListItemDivider text="borders" />
    <BordersColorsItems />
    <ListItemDivider text="responses" />
    <ResponsesColorsItem />
    <ListItemDivider text="http" />
    <HttpColorsItems />
  </List>
);
