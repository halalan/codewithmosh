import React, { Component } from 'react'


const first = [ 1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];

const clone = [...first];
console.log(first)
console.log(clone)


export default class index extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
