import React, { Component } from 'react';
import NewProject from './NewProject';
import Documentation from './Documentation';
import Initiation from './Initiation';
import DocumentationNew from './DocumentationNew'
import Milestone from './Milestone'
import Workspace from './Workspace';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    Title: '',
    Description: '',
    Team_members: '',
    Domains: '',
    Est_completion: '',
    Block_title: '',
    Description_int: '',
    Link: '',
    Project_description: '',
    Deadline: '',
    Workspace_url: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { Title, Description, Team_members, Domains, Est_completion, Block_title, Description_int, Link, Project_description, Deadline, Workspace_url } = this.state;
    const values = { Title, Description, Team_members, Domains, Est_completion, Block_title, Description_int, Link, Project_description, Deadline, Workspace_url };

    switch (step) {
      case 1:
        return (
          <NewProject
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Documentation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return (
            <Initiation
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 4:
            return (
              <DocumentationNew
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
            case 5:
        return (
          <Milestone
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Workspace
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;

