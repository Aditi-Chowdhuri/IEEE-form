import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Initiation } from './Initiation';
import { Nav, Tab , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class DocumentationNew extends Component {
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
              <div className="new2">Documentation</div>
              <div style={{width:"auto"}}>
              </div>
            </Nav>
            </Tab.Container>
            </div>
            <hr className="new1"></hr>
      <MuiThemeProvider>
        <React.Fragment>
        <RaisedButton
          className="button_form"
          color="primary"
          variant="contained"
        >Initiation<pre>                                                   </pre></RaisedButton>
        
        <RaisedButton
          className="button_form_doc"
          color="primary"
          variant="contained"
        >+ add a new block<pre>                                                   </pre></RaisedButton>
        <br />
        
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

export default DocumentationNew;
