import React, { Component } from 'react';

const person = {
    name: "Mosh",
    walk() {},
    talk() {},
};
person.talk();
person.name = '';

const targetMember = 'name' ;
person[targetMember.value] = 'John'; 

class Ojek extends Component {
  
  render() {
   
    return (
      
      <div>
  
      </div>
    
    );
  }
}


export default Ojek;
