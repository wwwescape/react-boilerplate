import React from 'react';

import Count from './containers/Count';
import IncreaseCount from './containers/IncreaseCount';
import DecreaseCount from './containers/DecreaseCount';

const Counter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12"><h1>Counter</h1></div>
      </div>
      <div className="row">
        <div className="col-md-12"><Count /></div>
      </div>
      <div className="row">
        <div className="col-md-6"><IncreaseCount /></div>
        <div className="col-md-6"><DecreaseCount /></div>
      </div>
    </div>
  );
};

export default Counter;
