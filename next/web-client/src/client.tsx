import React from 'react';
import { hydrate } from 'react-dom';
import Cookies from 'js-cookie';
import createUssr from '@rockpack/ussr';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { LocalizationContainer } from './features/Localization';
import { App } from './main';
import { isProduction } from './utils/mode';
import { createStore } from './store';
import { logger } from './utils/logger';

declare global {
  interface Window {
    USSR_DATA: {
      [key: string]: unknown;
    };
    REDUX_DATA: {
      [key: string]: unknown;
    };
  }
}

const history = createBrowserHistory();

const [, Ussr] = createUssr(window.USSR_DATA);

const getToken = (): string | undefined => Cookies.get('token');

const store = createStore({
  logger,
  initState: window.REDUX_DATA,
  history,
  getToken
});

const insertCss = (...styles): () => void => {
  const removeCss = isProduction() ?
    [] :
    styles.map(style => style && typeof style._insertCss === 'function' && style._insertCss());
  return (): void => removeCss.forEach(dispose => dispose());
};

hydrate(
  <Ussr>
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <ConnectedRouter history={history}>
          <LocalizationContainer>
            <App />
          </LocalizationContainer>
        </ConnectedRouter>
      </StyleContext.Provider>
    </Provider>
  </Ussr>,
  document.getElementById('root')
);
