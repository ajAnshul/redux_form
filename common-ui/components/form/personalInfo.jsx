import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {addPersonalInfo} from '../../actions/addPersonalInfo.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';




const style={
  margin:20
}
class PersonalInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{}
    }
  }

  handleInputChange(event){
    var obj = this.state.data;
    obj[event.target.name] = event.target.value;
  }

  handleSubmit(event){
    event.preventDefault();
    {this.props.addPersonalInfo(this.state.data)}
  }
  handleChange(event, date) {
  var obj = this.state.data;
  obj["dob"] = date;
};

  render(){
  var data = this.state.data;
    return(
      <div>
        <div style={style}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>Enter your personal information</h2>
            <div className="col-xs-12">
              <TextField floatingLabelText="First Name" name="firstName" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="Last Name" name="lastName" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="Father's Name" name="fatherName" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="Mother's Name" name="motherName" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <DatePicker  mode="landscape" floatingLabelText="Date of Birth" name="dob" onChange={this.handleChange.bind(this)} />
            </div>
              <RaisedButton type="submit" label="Save" primary={true} style={style} />
              <Link to={{pathname:'/address'}} data={data}>
                <RaisedButton  label="Next" primary={true} style={style} />
              </Link>
          </form>


        </div>


      </div>

    )
  }
}


function mapStateToProps(state) {
    return {
        personal_info: state.personal_info
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({addPersonalInfo: addPersonalInfo}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PersonalInfo);
