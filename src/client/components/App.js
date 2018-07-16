import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './HomeComponent';
import About from './AboutComponent';
import Counter from './CounterComponent';
import NoMatch from './NoMatchComponent';

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"><Link to="/">Home</Link></div>
          <div className="col-md-4"><Link to="/counter">Counter</Link></div>
          <div className="col-md-4"><Link to="/about">About</Link></div>
        </div>
        <hr />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
