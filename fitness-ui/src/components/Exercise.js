import React from 'react'

// Helper Functions
import { formatDate } from '../utils/HelperFunctions';

import { FaTrash} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'

const Exercise = ({exercise, onEdit, onDelete}) => {
  return (
    <tr>
    <td>{exercise.name}</td>
    <td>{exercise.reps}</td>
    <td>{exercise.weight}</td>
    <td>{exercise.unit}</td>
    <td>{formatDate(exercise.date)}</td>
    <td><FaTrash className='deleteIcon' onClick={() => onDelete(exercise._id)}/></td>
    <td><FiEdit className='editIcon' onClick={() => onEdit(exercise)}/></td>
</tr>
  )
}

export default Exercise