import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './Shop PROJECT/App';
import AppCountries from './Countries/AppCountries';
import AppPeople from './People API PROJECT/AppPeople';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <App /> // switch to see shop
  // <AppCountries /> // switch to see countries
  <AppPeople /> // switch to see people project

);
