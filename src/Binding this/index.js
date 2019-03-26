import React, { Component } from 'react';


const person = {
    name: "Mosh",
    walk()  {
        console.log(this)
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();


class Binding extends Component {
  
  render() {
    
    return (
      
      <div>
  
      </div>
    
    );
  }
}


export default Binding;