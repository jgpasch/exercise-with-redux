import React, {Component, PropTypes} from 'react';
import Button from '../../common/Button';

class ButtonGroup extends Component {
  constructor(props, context) {
    super(props, context);
    this.wasSelected = this.wasSelected.bind(this);
  }

  wasSelected(elem) {
    // console.log('ims elected');
  }

  render() {
    return (
      <div className="btn-group muscleGroupBtnDiv col-xs-12 col-md-8 col-md-offset-4" role="group">
        <Button wasSelected={this.wasSelected} text="chest and tri"/>
        <Button wasSelected={this.wasSelected} text="leg and shoulders"/>
        <Button wasSelected={this.wasSelected} text="back and bi"/>
      </div>
    );
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     newExercise: state.newExercise
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(exerciseActions, dispatch)
//   };
// }

export default ButtonGroup;
// export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);