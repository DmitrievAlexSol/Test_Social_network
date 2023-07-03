import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Redux/state";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

/*let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};*/

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
};


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
