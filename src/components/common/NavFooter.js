import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">date_range</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">accessibility</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">add</FontIcon>;

class NavFooter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedIndex: 0
    };
    this.select = this.select.bind(this);
  }

  select(index) {
    this.setState({
      selectedIndex: index
    });
    switch (index) {
      case 0:
        browserHistory.push('/');
        break;
      case 1:
        browserHistory.push('/');
        break;
      default:
        browserHistory.push('/create');
    }
  }

  render() {
    return (
      <Paper  id="my-footer" zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="By Date"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Muscle Groups"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Create New"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default NavFooter;