import React from "react";
import ReactDOM from "react-dom/client";
import "./home.css";
import App from "./App";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./Appolo-Client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
