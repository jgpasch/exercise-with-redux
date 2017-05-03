import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './common/Header';
import AddContentBtn from './common/AddContentBtn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  render() {
    const { authenticated } = this.props;
    const header = authenticated ? <Header /> : '';
    const addContentBtn = authenticated ? <AddContentBtn /> : '';
    return (
      <div id="app-container" className="container">
        {header}
        {this.props.children}
        {addContentBtn}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(App);
