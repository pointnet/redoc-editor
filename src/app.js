import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import RedocContextProvider from './contexts/redoc';
import defaultTheme from './theme/redoc-editor-default';
import Layout from './components/layout';

const AppContainer = () => {
  return (
    <Router>
      <MuiThemeProvider theme={defaultTheme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
          autoHideDuration={2000}>
          <RedocContextProvider>
            <Route path="/" component={Layout} />
          </RedocContextProvider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </Router>
  );
};

export default AppContainer;
