import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addExp} from '../../actions/addExp.js'
import AppBar from 'material-ui/AppBar';



const style={
  margin:20
}
const styles = {
  customWidth: {
    width: 400,
  },
};
class Experience extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{},
      value:1
    }
  }

  handleInputChange(event){
    var obj = this.state.data;
    obj[event.target.name] = event.target.value;
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addExp(this.state.data);
  }
  handleChange(event, date) {
  var obj = this.state.data;
  obj["dob"] = date;
};
handletoe(event,index,value){
  this.setState({value});
}
  render(){
    return(
      <div>
      <AppBar title="React Form" iconElementLeft={<span></span>} />

        <div style={style}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>Enter your Working Experience</h2>
            <div className="col-xs-12">
              <TextField floatingLabelText="Name of Company" name="noc" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="Number of Years works worked" name="noy" onBlur={this.handleInputChange.bind(this)} />
            </div>
              <RaisedButton type="submit" label="Save" primary={true} style={style} />
              <Link to="/profile"><RaisedButton  label="Next" primary={true} style={style} /></Link>
          </form>


        </div>


      </div>

    )
  }
}

function mapStateToProps(state) {
    return {
        exp: state.exp
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({addExp : addExp}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Experience);
