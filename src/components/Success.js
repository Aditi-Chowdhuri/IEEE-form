import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { Nav, Tab , Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
      <div style={{marginTop: "10px"}}>
            <Tab.Container defaultActiveKey="first">
            <Nav className="justify-content-between">
            <Nav.Item>
                <Nav.Link eventKey="brand" onClick={this.home}>X</Nav.Link>
              </Nav.Item>

              <div className="new2">Success</div>
              <div style={{width:"auto"}}>
              </div>
            </Nav>
            </Tab.Container>
            </div>
            <hr className="new1"></hr>
      <MuiThemeProvider>
      <React.Fragment>
            <h3>Thank You For Your Submission</h3>
      </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Success;
