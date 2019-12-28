import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Counter from './pages/counter';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />
  </Switch>
);

export default App;
