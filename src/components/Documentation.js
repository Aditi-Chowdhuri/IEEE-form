import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import { Nav, Tab , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          onClick={this.continue}
        >+ add a new block, ex: Initiation<pre>                                            </pre></RaisedButton>
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Documentation;
