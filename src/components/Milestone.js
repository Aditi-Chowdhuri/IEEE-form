import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class Milestone extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar 
          className="app_bar" 
          title="Milestone" 
        />
        <div className="container">
        
          <TextField
            className="text_field_space"
            hintText=" Enter task description in 80 words"             
            onChange={handleChange('Project_description')}
            defaultValue={values.Project_description}            
          /> 
          <br></br>
          <TextField
            className="text_field_space"
            hintText=""  
            type="date"           
            onChange={handleChange('Deadline')}
            defaultValue={values.Deadline}
          /> 
        </div>   
        
        <RaisedButton 
          label="Submit"
          primary={true}
          className="button_form"
          onClick={this.continue}
        />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Milestone;
