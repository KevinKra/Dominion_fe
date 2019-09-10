import React from "react";
import ReactDOM from "react-dom";
import App from "./_components/App/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "./normalize.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./_redux/reducers/combineReducers";

const store = createStore(rootReducer, composeWithDevTools());
const application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
