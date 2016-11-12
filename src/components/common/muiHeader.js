import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  console.log('you touched me');
}

const styles = {
  title: {
    cursor: 'pointer'
  },
  bar: {
    backgroundColor: 'rgb(97, 164, 244)'
  }
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarExampleIconButton = () => (
  <AppBar style={styles.bar}
    title={<span style={styles.title}>Workout Tracker</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<Link to="/"><IconButton><FontIcon className="material-icons">accessibility</FontIcon></IconButton></Link>}
  />
);

export default AppBarExampleIconButton;