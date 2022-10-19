// Dependencies 
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Components 
import ExerciseList from '../components/ExerciseList'


const HomePage = ({setExercise}) => {
  const navigate = useNavigate();

// Use state to bring in the data
  const [exercise, setExercises] = useState([]);

// RETRIEVE the list of movies
  const loadExercises = async () => {
    const response = await fetch('/exercise');
    const data = await response.json();
    setExercises(data);
} 


const onDeleteExercise = async (_id) =>{
  // Delete the exercise:_id from DB
  const response = await fetch(`/exercise/${_id}`, { method: 'DELETE' })
// Check for success or failure
  if (response.status === 204){
    // Get the update collection
    const updateCollection = await fetch('/exercise')
    const data = await  updateCollection.json()
    setExercises(data)
  } else {
    console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
  }
}

const onEditExercise = async (exercise) =>{
  // Pass the exercise object back up the component tree  
  setExercise(exercise);
  navigate('/edit-exercise');
}

useEffect(() => {
  loadExercises()
}, [])


  return (
    <article>
    <h2>Exercise List</h2>
    <p>Click on the edit or delete to icon to change your current list</p>
    <ExerciseList 
        exercise={exercise} 
        onEdit={onEditExercise} 
        onDelete={onDeleteExercise} 
    />
</article>
  )
}

export default HomePage