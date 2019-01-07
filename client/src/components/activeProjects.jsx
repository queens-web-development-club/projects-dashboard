import React, { Component } from 'react';
import Card from "./card"
import axios from 'axios';
class activeProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    let currentComponent = this;
    axios.get('/projects')
    .then(function (response) {
      currentComponent.setState({projects: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleClick(arg) {
    console.log(arg);
  }
  render() {
    return (
      <div className='header-card'>
        <h1>Active Projects</h1>
        <hr align="left" />
        {this.renderCards()}
      </div>
    );
  }
  //functions
  renderCards() {
    if(this.state.projects.length === 0) return <p>Empty List</p>
    return(
      this.state.projects.map(card => <Card key={card._id} id={card._id} title={card.title} description={card.description} handleClick={this.handleClick.bind(this, card._id)} />)
    )
  }
}


export default activeProjects;
