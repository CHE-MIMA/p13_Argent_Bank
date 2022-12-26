import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "./utiles/store";
// import store from './utiles/store';
// import {applyMiddleware} from 'redux';
// import createStore from 'redux';
// import thunk from 'redux-thunk';
// import { composeWidthDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
// import rootReducer from "./auth/AuthReducers";
// const store = createStore(
//   rootReducer, composeWidthDevTools(applyMiddleware(thunk, logger))
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Provider>
);


