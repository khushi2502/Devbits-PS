import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <Auth0Provider
    domain="dev-njg1a1iu5akkaaxx.us.auth0.com"
    clientId="C2rLwLAOzfItFC6RoWGPwowfBGHzzsIL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
  </Auth0Provider>
  
  // {/* </React.StrictMode> */}
);
