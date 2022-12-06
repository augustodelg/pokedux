import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { logger } from './middlewares';
import rootReducer from './reducers/root';

const composeAlternative = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnchanters = composeAlternative(
  applyMiddleware(thunk, logger)
);
const store = createStore(rootReducer, composedEnchanters);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
