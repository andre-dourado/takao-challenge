import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import PurchaseRequests from '../pages/PurchaseRequests';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cart" component={Cart} />
    <Route path="/purchases" component={PurchaseRequests} />
  </Switch>
);

export default Routes;
