import React, { Component } from 'react';
import Nav from './Nav';
import ActiveProjects from './activeProjects';
import ProjectForm from './Project-Form';
class Header extends Component {
  state = {}
  render() {
    return (
      <header>
        <Nav />
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 my-auto">
              <ActiveProjects />
              <ProjectForm />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
//functions

export default Header;
