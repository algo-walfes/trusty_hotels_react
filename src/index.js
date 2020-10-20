import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RoomProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react"

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain='dev-ay7qvf1c.eu.auth0.com'
    clientId='stgCBHTh0EDbxQLijvxp18Tl9l66N5e2'
    redirectUri={window.location.origin}>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
