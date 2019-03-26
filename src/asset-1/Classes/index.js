import React, { Component } from 'react'


class Person {
    constructor(name) {
     this.name = name;
    }

  walk() {
        console.log("walk");
    }
}

const person = new Person('koding')
console.log(person.name);





export default class index extends Component {
  render() {
    return (
      <div>
        <h1> with mosh</h1>
      </div>
    )
  }
}
