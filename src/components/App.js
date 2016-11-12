import React, { Component,PropTypes } from 'react';
import Header from './common/Header';
import AddContentBtn from './common/AddContentBtn';  
import NavFooter from './common/NavFooter';
import AppBarExampleIconButton from './common/muiHeader';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <NavFooter/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;