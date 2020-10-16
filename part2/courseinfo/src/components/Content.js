import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((note) => <Part key={note.id} part={note}/> )}
      </div>
    )
}

export default Content