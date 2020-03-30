import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import app2 from "./reducers";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(app2);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
