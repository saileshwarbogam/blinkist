import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
const domain = "dev-jeab1ext.us.auth0.com"
const clientId = "9t1uS2sa2IfDY0O7qs4KRgUDgbpxnNli"

ReactDOM.render(
  <Auth0Provider
  domain = {domain}
  clientId = {clientId}
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
