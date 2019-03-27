import React, { Component } from 'react'

export default class Counter extends Component {
 
 state = {
 count: 0
 };


 styles = {
     fontSize:30,
     fontWeight:"bold"
 }
    render() {
    return (
      <div>
         <span style={this.styles} className= "badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" >daftar</button>
      </div>
    );
  }

  formatCount() {
      const {count} = this.state;
      return count === 0 ? "hero" : count;
  }
}
