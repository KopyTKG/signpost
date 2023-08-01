import React from 'react';
import ReactDOM from 'react-dom';

import Router from "./routes/routes.js"
import './assets/scss/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <>
        <Router/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
