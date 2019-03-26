import React, { Component } from 'react';


const person ={
      name : "Mosh",
      walk() {
          console.log(this);
      }
};

person.walk();

const walk = person.walk;
walk(); 



class Keyword extends Component {
 
  render() {
    return (
      
      <div>

      </div>
    
    );
  }
}


export default Keyword;