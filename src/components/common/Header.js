import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.renderLinks = this.renderLinks.bind(this);
    this.menuCloseHandler = this.menuCloseHandler.bind(this);
    this.menuBtnClickHandler = this.menuBtnClickHandler.bind(this);
    this.logout = this.logout.bind(this);
  }

  menuCloseHandler() {
    $('#header-wrapper').collapse('hide');
    this.setState({
      menu: false
    });
    document.removeEventListener('click', this.menuCloseHandler);
  }

  logout() {
    this.props.logoutUser();
    browserHistory.push('/');
  }

  menuBtnClickHandler() {
    if (!this.state.menu) {
      this.setState({
        menu: true
      }, () => {
        document.addEventListener('click', this.menuCloseHandler);
      });
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (<li className="nav-item">
        <Link className="nav-link" onClick={this.logout} >Sign Out</Link>
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
      <nav className="navbar navbar-default" id="menubar">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button onClick={this.menuBtnClickHandler} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-wrapper" aria-expanded="false" id="med">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Workout Tracker</Link>
          </div>

          <div className="collapse navbar-collapse" id="header-wrapper">  
            <ul className="nav navbar-nav">
              <li><Link to="/exercises">Home</Link></li>
              <li><Link to="/exercises">Workouts</Link></li>
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

export default connect(mapStateToProps, actions)(Header);
