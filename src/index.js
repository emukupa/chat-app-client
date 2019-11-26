import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './store/reducers';
import Context from './context';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import './index.css';

const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__({
  // specify extensions' options liek name, actionsBlacklist, actionCreators, serialize...
}) : compose;

const middleware = composeEnhancers(applyMiddleware(logger, thunk));
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Context>
      <Router>  
        <App />
      </Router>
    </Context>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
