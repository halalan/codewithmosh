import React, { Component } from 'react';
// // ##function-2 ##//  
//  const jobs = [
//     { id: 1, isActive: true},
//     { id: 2, isActive: true},
//     { id: 5, isActive: true},
//     { id: 5, isActive: true},
//     { id: 5, isActive: false},
//  ];
 
//  const activeJobs = jobs.filter(function(job){ return job.isActive;});


//  console.log(activeJobs);


//## Arrow Functions  this and self ##//

const person = {
    talk() {
        var self = this; 
            setTimeout(() =>{
                console.log("this" ,this);
            },100 );
        }
    }



person.talk();

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
