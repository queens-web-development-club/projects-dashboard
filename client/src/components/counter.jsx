import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    list: []
  };
  styles = {
    fontSize: 22,
    fontWeight: 900
  };//Inline styles are objects
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 style={ this.styles } className={ this.getClasses() }>{ this.formatCount() }</h1>
            {this.renderList()}
          </div>
        </div>
      </div>

    );//always use a key with map
  }
  renderList() {
    if(this.state.list.length === 0) return <p>Empty List</p>
    return (
      <ul>
        {this.state.list.map(item => <li key={item}>{item}</li>)}
      </ul>
    )
  }
  formatCount() {
    const { count } = this.state; //object destruct
    return count === 0 ? <span>Zero</span> : count;
  }
  getClasses() {
    let classes = "c1 c2 ";
    classes += (this.state.count) === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
