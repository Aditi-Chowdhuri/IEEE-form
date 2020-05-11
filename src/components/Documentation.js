import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

export class Documentation extends Component {
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
          onClick={this.continue}
        >+ add a new block, ex: Initiation<pre>                                            </pre></RaisedButton>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Documentation;
