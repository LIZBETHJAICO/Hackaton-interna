import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={Login} />
      </Switch>
    </BrowserRouter>
  )};

export default Routes;