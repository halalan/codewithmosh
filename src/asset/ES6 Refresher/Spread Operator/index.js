import React, { Component } from 'react'


const first = { name: 'Mosh'};
const second = {Job: "Instruktor" };


const clone = {...first, ...second}
const combined = {...first, ...second, location: "indonesia"};
console.log(combined);
console.log(clone)


export default class index extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
