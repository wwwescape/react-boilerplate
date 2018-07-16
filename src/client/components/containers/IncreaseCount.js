import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { increaseCount } from '../../actions';

class IncreaseCount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Button outline color="primary" onClick={(e) => { e.preventDefault(); this.props.dispatch(increaseCount()); }}>Increase</Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCount, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCount);
