/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with redux-logger and react-hot-loader
  even tho those 2 deps are only used in development
  eslint has no way to tell that and outputs an error
*/

// react deps
import React from 'react';
import ReactDOM from 'react-dom';
// hot reload for development
import { AppContainer } from 'react-hot-loader';

// redux deps
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from './App';

import './style/style.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, {}, enhancer);

const root = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
  module.hot.accept('./reducers', () => {
    store.replaceReducer(reducer);
  });
}
