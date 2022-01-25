import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/page404';


export default function Router() {
  return(
      <Switch>
        <MyRoute exact path="/" component={Login} isClosed />
        <MyRoute path="*" component={Page404} />
      </Switch>
  );
}

