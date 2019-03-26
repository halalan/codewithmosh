import React, { Component } from 'react'

const address = {
    street: 'semangat',
    city: 'semarang',
    country: '1234'
};


// const street = address.street;
// const city = address.city;
// const country = address.country;


const { street : st } = address;


console.log(st)


export default class index extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
