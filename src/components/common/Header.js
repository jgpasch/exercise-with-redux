import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.renderLinks = this.renderLinks.bind(this);
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (<li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>);
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-wrapper" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Workout Tracker</Link>
          </div>

          <div className="collapse navbar-collapse" id="header-wrapper">  
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Workouts</Link></li>
              <li><Link to="/create">Create New</Link></li>
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
