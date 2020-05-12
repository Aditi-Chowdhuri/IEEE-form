import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Nav, Tab , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Workspace extends Component {
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
              <div className="new2">Workspace</div>
              <div style={{width:"auto"}}>
              </div>
            </Nav>
            </Tab.Container>
            </div>
            <hr className="new1"></hr>
      <MuiThemeProvider>
        <React.Fragment>
        
        <div className="container_text">  
        Please enter the link to your team workspace. We officially support Taskade as of now, but we will be expanding support to Todoist and Trello soon.
        </div>

        <div className="form_text">
        <div className="text">
          Workspace URL: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Workspace_url')}
            defaultValue={values.Workspace_url}
          /> 
        </div>   
        </div>   
        
        <RaisedButton 
          label="Submit"
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

export default Workspace;
