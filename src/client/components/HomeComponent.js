import React from 'react';

import '../stylesheets/HomeComponent.css';

const Home = () => {
  return (
    <div className="HomeComponent">
      <div className="row">
        <div className="col-md-12"><h1>Welcome to the React Boilerplate!</h1></div>
      </div>
      <div className="row">
        <div className="col-md-12"><img src={require('../images/react.png')} alt="react" /></div>
      </div>
      <div className="row">
        <div className="col-md-12"><p>This is the home page.</p></div>
      </div>
    </div>
  );
};

export default Home;
