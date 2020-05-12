import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Nav, Tab , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
      <div style={{marginTop: "10px"}}>
            <Tab.Container defaultActiveKey="first">
            <Nav className="justify-content-between">
            <Nav.Item>
                <Nav.Link eventKey="brand" onClick={this.back}>B</Nav.Link>
              </Nav.Item>
              <div className="new2">Milestone</div>
              <div style={{width:"auto"}}>
              </div>
            </Nav>
            </Tab.Container>
            </div>
            <hr className="new1"></hr>
      <MuiThemeProvider>
        <React.Fragment>
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
          className="button_form_mil"
          onClick={this.continue}
        />
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Milestone;
