import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import configStore from "./store/storeConfig";

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.querySelector("#root")
);
