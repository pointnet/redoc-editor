import React from 'react';
import queryString from 'query-string';

import Layout from './layout';
import { RedocContext } from '../../contexts/redoc';
import useGoogleAnalytics from '../../hooks/use-google-analytics';

export default ({ location, history: { push } }) => {
  useGoogleAnalytics(location);
  const redoc = React.useContext(RedocContext);
  const pushCallback = React.useCallback(value => void push(value), [push]);
  React.useEffect(() => {
    const { config } = queryString.parse(location.search);
    if (config) {
      const json = JSON.parse(atob(config));
      console.log(json);
      redoc.setConfig(json);
      pushCallback('/');
    }
  }, [location.search, redoc, pushCallback]);
  return <Layout path={location.pathname} />;
};
