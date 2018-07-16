import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <p>This is the counter page.</p>
        <Alert color="info">
          This page uses Redux.
        </Alert>
        <pre>{this.props.count}</pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counterReducer,
  };
}

export default connect(mapStateToProps)(Count);
