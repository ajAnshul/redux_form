import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addEdu} from '../../actions/addEdu.js'



const style={
  margin:20
}
const styles = {
  customWidth: {
    width: 400,
  },
};
class Education extends React.Component{
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
    this.props.addEdu(this.state.data);
  }
  handleChange(event, date) {
  var obj = this.state.data;
  obj["dob"] = date;
};
handletoe(event,index,value){
  this.setState({value});
}

  render(){
    console.log("this is educaiton page"+this.props.data);
    return(
      <div>
      <AppBar title="React Form" iconElementLeft={<span></span>} />

        <div style={style}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h2>Enter your Education Details</h2>

            <div className="col-xs-12">
              <TextField floatingLabelText="Education Board " name="eduBoard" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
              <TextField floatingLabelText="Percentage" name="perc" onBlur={this.handleInputChange.bind(this)} />
            </div>
            <div className="col-xs-12">
            <DropDownMenu name="toe"  style={styles.customWidth}
            value={this.state.value} onChange={this.handletoe.bind(this)}>
              <MenuItem value={1} primaryText="Type of Exam" />
              <MenuItem value={2} primaryText="Yearly" />
              <MenuItem value={3} primaryText="Half yearly" />
              <MenuItem value={4} primaryText="Quaterly" />
            </DropDownMenu>
            </div>
              <RaisedButton type="submit" label="Save" primary={true} style={style} />
              <Link to="/exp"><RaisedButton  label="Next" primary={true} style={style} /></Link>
          </form>


        </div>


      </div>

    )
  }
}

function mapStateToProps(state) {
    return {
        edu: state.edu
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({addEdu : addEdu }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Education);
