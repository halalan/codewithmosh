import React, { Component } from 'react';
  
const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 5, isActive: true},
    { id: 5, isActive: true},
    { id: 5, isActive: false},
 ];
 
 const activeJobs = jobs.filter(function(job){ return job.isActive;});


 console.log(activeJobs);


class Arrow extends Component {
  
  render() {

// const square = number => number * number;
// console.log(square(5));




return(
      
      <div>
  
      </div>
    
    );
  }
}


export default Arrow;
