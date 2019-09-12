import React from "react";
import ReactDOM from "react-dom";
import App from "./_components/App/App";
import { BrowserRouter } from "react-router-dom";
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
