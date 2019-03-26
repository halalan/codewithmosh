import React, { Component } from 'react';


const person ={
      name : "keyyyyyyyword",
      walk() {
          console.log(this);
      }
};

person.walk();

const walk = person.walk;
walk(); 


console.log(person.name)

class Keyword extends Component {
 
  render() {
    return (
      
      <div>

      </div>
    
    );
  }
}


export default Keyword;