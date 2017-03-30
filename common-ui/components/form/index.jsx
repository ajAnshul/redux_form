import React from 'react';
import AppBar from 'material-ui/AppBar';
import PersonalInfo from './personalInfo.jsx';



export default class Form extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <AppBar title="React Form" iconElementLeft={<span></span>} />
        <PersonalInfo />
      </div>
    )
  }
}
