import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './NewProject.css';
import { Nav, Tab , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class NewProject extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
      <div style={{marginTop: "10px"}}>
            <Tab.Container defaultActiveKey="first">
            <Nav className="justify-content-between">
            <Nav.Item>
                <Nav.Link eventKey="brand" onClick={this.home}>X</Nav.Link>
              </Nav.Item>
              <div className="new2">New project</div>
              <div style={{width:"auto"}}>
              </div>
            </Nav>
            </Tab.Container>
            </div>
            <hr className="new1"></hr>
        <MuiThemeProvider>
        <React.Fragment>
        
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
