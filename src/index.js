import React from 'react';
import ReactDOM from 'react-dom/client';
// import './assets/fonts/metropolis/Metropolis-Regular.otf';
// import './assets/fonts/metropolis/Metropolis-Medium.otf';
// import './assets/fonts/metropolis/Metropolis-Bold.otf';
// import './assets/fonts/metropolis/Metropolis-SemiBold.otf';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/normalize.css';
import './assets/css/main.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-MWJ8BLDH',
};
TagManager.initialize(tagManagerArgs);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
