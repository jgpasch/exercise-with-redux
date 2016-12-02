import React, {Component} from 'react';

class OAuth extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.location.assign('/auth/google');
    // $.get('/auth/google', function(response) {
    //   console.log(response);
    // });
  }

  // handleClick() {
  //   $.get('https://www.googleapis.com/oauth2/v2/userinfo', function(data) {
  //     console.log(data);
  //   });
  // }

  render() {
    
    return (
      <div>
        here
      </div>
    );
  }
}

export default OAuth;