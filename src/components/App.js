import React, { Component,PropTypes } from 'react';
import Header from './common/Header';
import AddContentBtn from './common/AddContentBtn';  

class App extends Component {
  constructor(props) {
    super(props);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.menuCloseHandler = this.menuCloseHandler.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('click', this.menuCloseHandler);
  // }

  // menuCloseHandler() {
  //   alert('was clicked');
  // }

  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <AddContentBtn />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;