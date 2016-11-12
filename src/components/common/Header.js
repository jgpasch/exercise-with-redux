import React from 'react';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const styles = {
  icon: {
    float: 'right'
  }
};

const Header = () => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Workout Tracker</Link>
          <IconButton style={styles.icon} ><FontIcon className="material-icons">lightbulb_outline</FontIcon></IconButton>
        </div>
      </div>
    </nav>
    );
};

export default Header;
