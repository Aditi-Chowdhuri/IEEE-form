import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './NewProject.css';

export class NewProject extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MuiThemeProvider>
        <React.Fragment>
        <AppBar 
          className="app_bar" 
          title="New Project" 
        />
        <div className="form_text">
        <div className="text">
          Title: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Title')}
            defaultValue={values.Title}
          /> 
        </div>     
        <div className="text">
          Description: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Description')}
            defaultValue={values.Description}
          /> 
        </div>  
        <div className="text">
          Team members: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Team_members')}
            defaultValue={values.Team_members}
          /> 
        </div>  
        <div className="text">
          Domains: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Domains')}
            defaultValue={values.Domains}
          /> 
        </div>  
        <div className="text">
          Estimated completion: 
          <TextField
            className="text_field"
            type="date"
            hintText=""             
            onChange={handleChange('Est_completion')}
            defaultValue={values.Est_completion}           
          /> 
        </div>
        </div>      
        <RaisedButton 
          label="Save and next"
          primary={true}
          className="button_form"
          onClick={this.continue}
        />
        </React.Fragment>
      </MuiThemeProvider>
      </div>     
    );
  }
}
export default NewProject;
