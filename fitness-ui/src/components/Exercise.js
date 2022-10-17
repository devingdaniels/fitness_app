import React from 'react'
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const Exercise = ({exercise}) => {
  return (
    <tr>
    <td>{exercise.name}</td>
    <td>{exercise.reps}</td>
    <td>{exercise.weight}</td>
    <td>{exercise.unit}</td>
    <td>{exercise.date.substring(0,10)}</td>
    <td><MdDeleteForever/></td>
    <td><MdEdit/></td>
</tr>
  )
}

export default Exercise


// onClick={() => onDelete(movie._id)}
// onClick={() => onEdit(movie)}