import React, {Component} from 'react';

class OAuth extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.location.assign('/auth/google');
    // $.get('/auth/google', function(response) {
    //   console.log(response);
    // });
  }

  render() {
    
    return (
      <div>
        here
      </div>
    );
  }
}

export default OAuth;