import React, {Component} from 'react';

class Button extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.getBtnStyle = this.getBtnStyle.bind(this);
  }

  handleClick() {
    this.props.wasSelected(this);
  }
  
  getBtnStyle() {
    let btnStyle = "btn btn-default mgBtn";
    if (this.props.isSelected) {
      switch(this.state.rando) {
      case 0:
        btnStyle += " exercise zero";
        break;
      case 1:
        btnStyle += " exercise one";
        break;
      case 2:
        btnStyle += " exercise two";
        break;
      default:
      }
    }
    
    return btnStyle;
  }

  render() {
    return (
      <button className={this.getBtnStyle()} onClick={this.handleClick}>{this.props.text}</button>
    );
  }
}

export default Button;