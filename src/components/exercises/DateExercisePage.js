import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../actions/exerciseActions';
import DateExerciseList from './DateExerciseList';

class DateExercisePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.actions.getUniqueDates();
    
  }

  handleClick() {
      $.ajax({
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + 'ya29.Ci-oA_MiAhMyrlfYQ6aytUvdaCCncluhanORmnurB_gscfsIOP2yw5NtZQMaYDJDNQ' 
      },
      url: 'https://www.googleapis.com/oauth2/v2/userinfo',
      // beforeSend: function(xhr, settings) {
      //   xhr.setRequestHeader('Authorization', 'Bearer ' + 'ya29.Ci-oA_MiAhMyrlfYQ6aytUvdaCCncluhanORmnurB_gscfsIOP2yw5NtZQMaYDJDNQ');
      // },
      success: function(data) {
        console.log(data);
      }
    });
  }

  render() {
    const { dates } = this.props;
    return (  
      <div>
      <DateExerciseList dates={dates}/>]
      <button onClick={this.handleClick} className="btn btn-default">Click me to get profile info</button>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    dates: state.dates
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exerciseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DateExercisePage);