import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/page404';


export default function Router() {
  toast.success('Concluido com sucesso!!');
  toast.error('Deu ruim');
  return(
      <Switch>
        <MyRoute exact path="/" component={Login} isClosed />
        <MyRoute path="*" component={Page404} />
      </Switch>
  );
}

