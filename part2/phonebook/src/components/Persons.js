import React from 'react'

const Persons = ({ persons, filter}) => {
  return(
    persons.filter(x => x.name.toLowerCase().includes(filter.toLowerCase())).map(x => <div key={x.id}> {x.name} {x.number} </div>)
  )
}

export default Persons