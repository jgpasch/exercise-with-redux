import React, {Component, PropTypes} from 'react';



class MuscGroupBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getStyle = this.getStyle.bind(this); 
  }

  handleClick() {
    this.props.whenClicked(this);
  }

  getStyle() {
    let style = "btn btn-default mgBtn";
    if (this.props.myClass == undefined) {
      return style; 
    } else {
      return style + this.props.myClass;
    }
  }
 
  render() {
    let btnStyle = "btn btn-default mgBtn";
    if (this.props.myClass == undefined) {
      console.log('my class is undefined');
    }
    return (
      <button onClick={this.handleClick} className={this.getStyle()}>{this.props.text}</button>
    );
  }
}

// MuscGroupBtn.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   text: PropTypes.string.isRequired
// };

export default MuscGroupBtn;