import React, { Component } from 'react'

export default class Counter extends Component {
 
 state = {
 count: 0
 };
    render() {

    return (
      <div>
        <span className="badge badge-primary m-2"> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm"> daftar</button>
      </div>
    );
  }

  getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += this.state.count === 0 ? "warning" : "primary";
      return classes;
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? "heroooooooooooo" : count;
  }
}

