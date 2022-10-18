import React from 'react'
import Exercise from '../components/Exercise';

const ExerciseList = ({exercise, onEdit, onDelete}) => {
  return (
    <table id="exercises">
    <caption>Add and Edit Exercises</caption>
    <thead>
        <tr>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        {exercise.map((exercise, i) => 
            <Exercise 
                exercise={exercise} 
                key={i}
                onDelete={onDelete}
                onEdit={onEdit} 
            />)}
    </tbody>
</table>
  )
}

export default ExerciseList