import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../Home/Home';

export const RouteConfig = () => {
  return (
    <Router>
      <Route exact path='/' render={() => <Home />} />
    </Router>
  );
};
