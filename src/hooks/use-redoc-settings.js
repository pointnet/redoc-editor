import useImmerState from './use-immer-state';

import { gaEvent, redocOptions } from '../utils';

export const ACTIONS = {
  resetSettings: () => {},
  resetSpecUrl: () => {},
  settingsBackgroundColor: value => {},
  settingsExpandResponses: value => {},
  settingsLabel: (property, value) => {},
  settingsOption: property => {},
  settingsSpecUrl: value => {},
};

const useRedocSettings = initialSettings => {
  const [settings, setSettings] = useImmerState(initialSettings);
  const loadSettings = settings => {
    resetSpecUrl(false);
    resetSettings(false);
    setSettings(draft => {
      draft.specUrl = settings.specUrl;
      draft.backgroundColor = settings.backgroundColor;
      if (settings.options.labels) {
        draft.labels = { ...draft.labels, ...settings.options.labels };
      }
      const options = redocOptions.reduce(
        (acc, option) => {
          if (
            option.property !== 'untrustedSpec' &&
            settings.options[option.property]
          ) {
            acc.push(option.property);
          }
          return acc;
        },
        ['untrustedSpec']
      );
      draft.options = options;
    });
  };
  const resetSettings = (withEvents = true) => {
    if (withEvents) gaEvent('redoc', 'settings', 'reset');
    setSettings(draft => {
      draft.backgroundColor = initialSettings.backgroundColor;
      draft.options = initialSettings.options;
      draft.labels = initialSettings.labels;
    });
  };
  const resetSpecUrl = (withEvents = true) => {
    if (withEvents) gaEvent('redoc', 'specUrl', 'reset');
    setSettings(draft => {
      draft.specUrl = initialSettings.specUrl;
    });
  };
  const settingsBackgroundColor = value => {
    gaEvent('redoc', 'theme', 'backgroundColor', value);
    setSettings(draft => {
      draft.backgroundColor = value;
    });
  };
  const settingsExpandResponses = value => {
    gaEvent('redoc', 'options', 'expandResponses', value);
    setSettings(draft => {
      const all = draft.expandResponses.indexOf('all') !== -1;
      if (value === 'all' && all) {
        draft.expandResponses = [];
      } else if (value === 'all' && !all) {
        draft.expandResponses = ['all'];
      } else if (all) {
        draft.expandResponses = [value];
      } else {
        const index = draft.expandResponses.indexOf(value);
        if (index === -1) draft.expandResponses.push(value);
        else draft.expandResponses.splice(index, 1);
      }
    });
  };
  const settingsLabel = (property, value) => {
    gaEvent('redoc', 'labels', property, value);
    setSettings(draft => {
      draft.labels[property] = value;
    });
  };
  const settingsOption = property => {
    gaEvent(
      'redoc',
      'options',
      property,
      settings.options.indexOf(property) === -1
    );
    setSettings(draft => {
      const index = draft.options.indexOf(property);
      if (index === -1) draft.options.push(property);
      else draft.options.splice(index, 1);
    });
  };
  const settingsSpecUrl = value => {
    gaEvent('redoc', 'specUrl', 'load', value);
    setSettings(draft => {
      draft.specUrl = value;
    });
  };
  return [
    settings,
    {
      loadSettings,
      resetSettings,
      resetSpecUrl,
      settingsBackgroundColor,
      settingsExpandResponses,
      settingsLabel,
      settingsOption,
      settingsSpecUrl,
    },
  ];
};

export default useRedocSettings;
