import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Initiation } from './Initiation';

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
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar 
          className="app_bar" 
          title="Documentation" 
        />
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
    );
  }
}

export default DocumentationNew;
