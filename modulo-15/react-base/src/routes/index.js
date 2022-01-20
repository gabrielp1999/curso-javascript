import React from 'react';
import { Route, Routes  } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/page404';


export default function Router() {
  return(
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
  );
}
