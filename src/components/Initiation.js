import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Nav, Tab , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Initiation extends Component {
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
        <div className="form_text">
        <div className="text">
          Block Title: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Block_title')}
            defaultValue={values.Block_title}
          /> 
        </div>  
        <div className="text">
          Description: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Description_int')}
            defaultValue={values.Description_int}
          /> 
        </div>  
        <div className="text">
          Link: 
          <TextField
            className="text_field"
            hintText="Type Here"             
            onChange={handleChange('Link')}
            defaultValue={values.Link}           
          /> 
        </div>
        <RaisedButton
          className="button_form"
          color="primary"
          variant="contained"
        >+ add a new section<pre>                                         </pre></RaisedButton>
        <br />
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

export default Initiation;
