import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { decreaseCount } from '../../actions';

class DecreaseCount extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <Button outline color="primary" onClick={(e) => { e.preventDefault(); this.props.dispatch(decreaseCount()); }}>Decrease</Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCount, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCount);
