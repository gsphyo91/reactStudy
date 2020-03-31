import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

// store 생성
const store = createStore(reducers);

ReactDOM.render(
  // Store 지정
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
