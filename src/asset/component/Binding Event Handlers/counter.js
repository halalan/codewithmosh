import React, { Component } from 'react'

export default class Counter extends Component {
 
 state = {
 count: 0
 };

//  constructor(){
//      super();
//     this.handleIncrement =  this.handleIncrement.bind(this);
//     //  console.log("construktor.!!!!",this)
//  }

handleIncrement = () => {
    console.log('increment Clicked', this);
}
    render() {
    return (
      <div>
        <span className="badge badge-primary m-2"> {this.formatCount()}</span>
        <button 
         onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
          >
           klik di sini
           </button>
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
    return count === 0 ? "heelllloooooooooooo" : count;
  }
}

