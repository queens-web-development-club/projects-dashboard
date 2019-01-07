import React, { Component } from 'react';
import axios from 'axios';
class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Added ' + this.state.title);
    event.preventDefault();
    const data = this.state;
    console.log(data);
    axios.post('/projects', data)
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
//functions

export default ProjectForm;
