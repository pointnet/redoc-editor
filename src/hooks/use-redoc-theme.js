import useImmerReducer from './use-immer-reducer';
import redocThemeReducer, { EVENTS } from '../reducers/redoc-theme';

import { gaEvent } from '../utils';

export const ACTIONS = {
  resetTheme: () => {},
  themeBooleanSingle: (path, value) => {},
  themeColorBackground: (path, value) => {},
  themeColorLinks: (path, value) => {},
  themeColorSingle: (path, value) => {},
  themeColorText: (path, value) => {},
  themeColorTone: (path, value) => {},
  themeIntegerSingle: (path, value) => {},
  themeSpacing: (path, value) => {},
  themeUnitSingle: (path, value) => {},
};

const useRedocTheme = initialTheme => {
  const [theme, dispatch] = useImmerReducer(redocThemeReducer, initialTheme);
  const withEvent = type => (path, value) => {
    gaEvent('redoc', 'theme', path, value);
    dispatch({ type, path, value });
  };
  const loadTheme = theme => {
    resetTheme(false);
    dispatch({ type: EVENTS.theme.load, value: theme });
  };
  const resetTheme = (withEvents = true) => {
    if (withEvents) gaEvent('redoc', 'theme', 'reset');
    dispatch({ type: EVENTS.theme.reset, value: initialTheme });
  };
  const themeBooleanSingle = withEvent(EVENTS.single.boolean);
  const themeColorBackground = withEvent(EVENTS.colors.background);
  const themeColorLinks = withEvent(EVENTS.colors.links);
  const themeColorSingle = withEvent(EVENTS.single.color);
  const themeColorText = withEvent(EVENTS.colors.text);
  const themeColorTone = withEvent(EVENTS.colors.tone);
  const themeIntegerSingle = withEvent(EVENTS.single.integer);
  const themeSpacing = withEvent(EVENTS.theme.spacing);
  const themeUnitSingle = withEvent(EVENTS.single.unit);
  return [
    theme,
    {
      loadTheme,
      resetTheme,
      themeBooleanSingle,
      themeColorBackground,
      themeColorLinks,
      themeColorSingle,
      themeColorText,
      themeColorTone,
      themeIntegerSingle,
      themeSpacing,
      themeUnitSingle,
    },
  ];
};

export default useRedocTheme;
