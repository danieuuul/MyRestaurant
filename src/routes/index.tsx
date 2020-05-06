import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Grocery from '../pages/Grocery';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Register} />
    <Route path="/shopping" exact component={Grocery} />
  </Switch>
);

export default Routes;
