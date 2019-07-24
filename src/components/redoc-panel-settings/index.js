import React from 'react';
import Button from '@material-ui/core/Button';

import SidebarPanel from '../sidebar-panel';
import RedocSettingsExpandResponses from '../redoc-settings-expand-responses';
import RedocSettingsGeneral from '../redoc-settings-general';
import RedocSettingsLabels from '../redoc-settings-labels';
import { RedocContext } from '../../contexts/redoc';

const SECTIONS = [
  { key: 'general', component: <RedocSettingsGeneral /> },
  { key: 'expandResponses', component: <RedocSettingsExpandResponses /> },
  { key: 'labels', component: <RedocSettingsLabels /> },
];

export default () => {
  const redoc = React.useContext(RedocContext);
  const action = (
    <Button
      size="small"
      color="secondary"
      onClick={() => redoc.resetSettings()}>
      RESET
    </Button>
  );
  return (
    <SidebarPanel
      title="REDOC SETTINGS"
      defaultSection="general"
      sections={SECTIONS}
      action={action}
      gaAction="settings"
    />
  );
};
