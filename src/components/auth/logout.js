import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actionTypes';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
 }

  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        Sorry to see you go!
      </div>
    );
  }
}

export default connect()(Logout);