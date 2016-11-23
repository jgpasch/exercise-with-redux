import React from 'react';
import {Link} from 'react-router';

const Header = () => {
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
            <li><Link to="/login">Sign In</Link></li>            
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;
