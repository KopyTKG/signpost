import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './assets/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminLayout from "./layouts/admin/admin";

ReactDOM.render(
  <React.StrictMode>
    <>
        <BrowserRouter>
          <Switch>
            <Route path="/" render={(props) => <AdminLayout {...props} />} />
          </Switch>
        </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
