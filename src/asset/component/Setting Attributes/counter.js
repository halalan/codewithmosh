import React, { Component } from 'react'

export default class Counter extends Component {
 
 state = {
 count: 0
 };
    render() {
    return (
      <div>
        <span style={{fontSize: 30}} className="badge badge-primary m-2"> {this.formatCount}</span>
        <button className="btn btn-secondary btn-sm"> daftar</button>
      </div>
    );
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? "hero" : count;
  }
}
