import React from 'react'

const Total = ({ course }) => {
    const sum = course.parts.reduce((sum,x) => { 
      console.log("sum value: ", sum)
      return sum + x.exercises
    }, 0)
    
    return(
      <p style={{fontWeight: "bold"}}> total of {sum} exercises </p>
    ) 
}

export default Total