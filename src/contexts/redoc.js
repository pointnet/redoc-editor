import React from 'react';
import { updatedDiff } from 'deep-object-diff';

import useRedocSettings, {
  ACTIONS as ACTIONS_SETTINGS,
} from '../hooks/use-redoc-settings';
import useRedocTheme, {
  ACTIONS as ACTIONS_THEME,
} from '../hooks/use-redoc-theme';
import {
  htmlTemplate,
  redocDefaultSettings,
  redocDefaultTheme,
} from '../utils';

export const RedocContext = React.createContext({
  ...redocDefaultSettings,
  ...ACTIONS_SETTINGS,
  ...ACTIONS_THEME,
  getConfig: encoded => {},
  getHtmlCode: () => {},
  setConfig: config => {},
});

export default ({ children }) => {
  const [theme, themeActions] = useRedocTheme(redocDefaultTheme);
  const [settings, settingsActions] = useRedocSettings(redocDefaultSettings);
  const getConfig = (encoded = false) => {
    const config = {
      specUrl: settings.specUrl,
      backgroundColor: settings.backgroundColor,
      options: {
        ...settings.options.reduce((acc, value) => {
          acc[value] = true;
          return acc;
        }, {}),
      },
    };
    if (settings.expandResponses.length > 0) {
      config.options.expandResponses = settings.expandResponses.join(',');
    }
    const updatedLabels = updatedDiff(
      redocDefaultSettings.labels,
      settings.labels
    );
    if (Object.keys(updatedLabels).length > 0)
      config.options.labels = updatedLabels;
    const updatedTheme = updatedDiff(redocDefaultTheme, theme);
    if (Object.keys(updatedTheme).length > 0)
      config.options.theme = updatedTheme;
    return encoded ? btoa(JSON.stringify(config)) : config;
  };
  const setConfig = config => {
    settingsActions.loadSettings(config);
    if (config.options.theme) {
      themeActions.loadTheme(config.options.theme);
    }
  };
  const getHtmlCode = () => htmlTemplate(getConfig());
  return (
    <RedocContext.Provider
      value={{
        ...settings,
        ...settingsActions,
        theme,
        ...themeActions,
        getConfig,
        setConfig,
        getHtmlCode,
      }}>
      {children}
    </RedocContext.Provider>
  );
};
