import React from 'react';

class MySubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.step();
  }

  render() {  
    return (
      <button onClick={this.handleClick}>{this.props.isSaving ? 'saving...' : this.props.value}</button>
    );
  }
}

export default MySubmitButton;