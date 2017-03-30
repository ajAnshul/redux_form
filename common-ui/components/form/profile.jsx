import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addPersonalInfo} from '../../actions/addPersonalInfo'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';



class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <AppBar title="React Form" iconElementLeft={<span></span>} />
        <h2>Profile Page</h2>
        <div className="row">
        <div className="col-lg-3">
        <h4>Personal Information</h4>
        <div className="col-xs-12">
        <TextField floatingLabelText="First Name" name="lastName" value={this.props.personal_info.firstName}  disabled={true} />
        </div>
        <div className="col-xs-12">
        <TextField floatingLabelText="Last Name" name="lastName" value={this.props.personal_info.lasttName}  disabled={true} />
        </div>
        <div className="col-xs-12">
        <TextField floatingLabelText="Father's Name" name="fatherName" value={this.props.personal_info.fatherName}  disabled={true} />
        </div>
        <div className="col-xs-12">
        <TextField floatingLabelText="Mother's Name" name="motherName" value={this.props.personal_info.motherName}  disabled={true} />
        </div>
        <div className="col-xs-12">
          <DatePicker  mode="landscape" floatingLabelText="Date of Birth" name="dob" value={this.props.personal_info.dob}  disabled={true}/>
        </div>
        </div>
        <div className="col-lg-3">
        <h4>Your Addresses</h4>
        <div className="col-xs-12">
          <TextField floatingLabelText="Street1" name="street1" value={this.props.address.street1} disabled={true} />
        </div>
        <div className="col-xs-12">
          <TextField floatingLabelText="Street2" name="street2" value={this.props.address.street2} disabled={true} />
        </div>
        <div className="col-xs-12">
          <TextField floatingLabelText="City" name="city" value={this.props.address.city} disabled={true} />
        </div>
        <div className="col-xs-12">
          <TextField floatingLabelText="State" name="state" value={this.props.address.state} disabled={true} />
        </div>
        <div className="col-xs-12">
          <TextField  mode="landscape" floatingLabelText="Zip" name="zip" value={this.props.address.zip} disabled={true} />
        </div>
        </div>
        <div className="col-lg-3">
        <h4>Education Details</h4>

        <div className="col-xs-12">
          <TextField floatingLabelText="Education Board " name="eduBoard" value={this.props.edu.eduBoard} disabled={true} />
        </div>
        <div className="col-xs-12">
          <TextField floatingLabelText="Percentage" name="perc" value={this.props.edu.perc} disabled={true} />
        </div>
        </div>

        <div className="col-lg-3">
        <h4> Working Experience</h4>
        <div className="col-xs-12">
          <TextField floatingLabelText="Name of Company" name="noc" value={this.props.exp.noc} disabled={true} />
        </div>
        <div className="col-xs-12">
          <TextField floatingLabelText="Number of Years works worked" name="noy" value={this.props.exp.noy} disabled={true} />
        </div>
        </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        personal_info: state.personal_info,
        address: state.address,
        edu:state.edu,
        exp:state.exp
    };
}
export default connect(mapStateToProps)(Profile);
