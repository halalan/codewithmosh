import React, { Component } from 'react';



class SayHello extends Component {
  sayHello=()=>{
    for(var i =0; i<5;i++ ){
      console.log(i)
    }
  }
  render() {
    return (
      
      <div>
    {this.sayHello()}
      </div>
    
    );
  }
}


export default SayHello;
