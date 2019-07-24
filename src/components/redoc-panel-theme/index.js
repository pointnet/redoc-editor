import React from 'react';
import Button from '@material-ui/core/Button';

import SidebarPanel from '../sidebar-panel';
import RedocThemeColors from '../redoc-theme-colors';
import RedocThemeGeneral from '../redoc-theme-general';
import RedocThemeMenu from '../redoc-theme-menu';
import RedocThemeSchema from '../redoc-theme-schema';
import RedocThemeTypography from '../redoc-theme-typography';
import { RedocContext } from '../../contexts/redoc';

const SECTIONS = [
  { key: 'general', component: <RedocThemeGeneral /> },
  { key: 'colors', component: <RedocThemeColors /> },
  { key: 'schema', component: <RedocThemeSchema /> },
  { key: 'typography', component: <RedocThemeTypography /> },
  { key: 'menu', component: <RedocThemeMenu /> },
];

export default () => {
  const redoc = React.useContext(RedocContext);
  const action = (
    <Button size="small" color="secondary" onClick={() => redoc.resetTheme()}>
      RESET
    </Button>
  );
  return (
    <SidebarPanel
      title="REDOC THEME"
      defaultSection="general"
      sections={SECTIONS}
      action={action}
      gaAction="theme"
    />
  );
};
