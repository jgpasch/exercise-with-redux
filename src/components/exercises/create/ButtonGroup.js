import React, {Component, PropTypes} from 'react';
import Button from '../../common/Button';
import MuscGroupBtn from './MuscGroupBtn';

class ButtonGroup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedItem: null
    };
    this.selectItem = this.selectItem.bind(this);
  }

  // this func gets triggered when a child button has been clicked
  selectItem(item) {
    this.setState({
      selectedItem: item
    });
    // setTimeout(() => this.props.step(), 200);
    this.props.step();
  }

  render() {
    let selectedKey;
    if (this.state.selectedItem == null) {
      //no selected button yet
      selectedKey = 1000;
    } else {
      selectedKey = this.state.selectedItem.props.mgNum;
    }

    // init empty children array, this will hold 3 newly created MuscGroupBtns
    let children = [];

    if (selectedKey != null) {
      // for loop execs 3 times for each musc btn
      for (let i = 0; i < 3; i++) {    
        let props = {
          whenClicked: this.selectItem
        };

        switch(i) {
          case 0:
            if (i === selectedKey) {
              props.myClass = " exercise zero mg-zero";
            }
            props.text = "chest and tri";
            props.mgNum = i;
            props.key = i;
            break;

          case 1: 
            if (i === selectedKey) {
              props.myClass = " exercise one";
            }
            props.text = "leg & shoulders";
            props.mgNum = i; 
            props.key = i;           
            break;

          case 2: 
            if (i === selectedKey) {
              props.myClass = " exercise two mg-two";             
            }
            props.text = "back & bi";
            props.mgNum = i;
            props.key = i;
            break;

          default: 

        }
        // create a new MuscGroupBtn elem from props we just made
        const newChild = React.createElement(MuscGroupBtn, props);
        children.push(newChild);
      }
    }

    return (
      <div className="btn-group muscleGroupBtnDiv col-xs-12" role="group">
        <div className="text-center">
          {children}
        </div>
      </div>
    );
  }
}

ButtonGroup.propTypes = {
    children: React.PropTypes.node
};

export default ButtonGroup;
