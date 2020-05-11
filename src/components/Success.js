import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
      <React.Fragment>
      <AppBar 
          className="app_bar" 
          title="Success" 
        />
            <h1>Thank You For Your Submission</h1>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
