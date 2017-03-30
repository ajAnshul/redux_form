import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addAddress} from '../../actions/addAddress.js'
import AppBar from 'material-ui/AppBar';



const style={
  margin:20
}
class Address extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{}
    }
  }
  handleInputChange(event){
    var obj = this.state.data;
    obj[event.target.name] = event.target.value;
    this.setState({data:obj});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addAddress(this.state.data);

  }
  handleChange(event, date) {
  var obj = this.state.data;
  obj["dob"] = date;
  this.setState({data:obj});
};
  render(){
    return(
      <div>
      <AppBar title="React Form" iconElementLeft={<span></span>} />

        <div style={style}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>Enter your Addresses</h2>
            <div className="col-xs-12">
              <TextField floatingLabelText="Street1" name="street1" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="Street2" name="street2" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="City" name="city" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="State" name="state" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField  mode="landscape" floatingLabelText="Zip" name="zip" onChange={this.handleChange.bind(this)} />
            </div>
              <RaisedButton type="submit" label="Save" primary={true} style={style} />
              <Link to="/education"><RaisedButton  label="Next" primary={true} style={style} /></Link>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        address: state.address
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({addAddress : addAddress }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Address);
