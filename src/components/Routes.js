import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Quote from './Quote';
import Home from './Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
