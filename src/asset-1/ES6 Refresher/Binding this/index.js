import React, { Component } from 'react';


const person = {
    name: "halalan",
    walk()  {
        console.log(this)
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();
 

console.log(person.name);

class Binding extends Component {
  
  render() {
    
    return (
      
      <div>
  
      </div>
    
    );
  }
}


export default Binding;