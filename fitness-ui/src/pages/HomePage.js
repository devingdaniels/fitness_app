// Dependencies 
import React from 'react'
import { useState, useEffect } from 'react';
import ExerciseList from '../components/ExerciseList'
import { useNavigate } from "react-router-dom";

// Components 



const HomePage = ({setExercise}) => {
// Use the history for updating
 // const history = useNavigate();

// Use state to bring in the data
const [exercise, setExercises] = useState([]);

// RETRIEVE the list of movies
const loadExercises = async () => {
    const response = await fetch('/exercise');
    const data = await response.json();
    setExercises(data);
} 

useEffect(() => {
  loadExercises()
}, [])


  return (
    <article>
    <h2>Exercise List</h2>
    <p>Paragraph about this page.</p>
    <ExerciseList 
        exercise={exercise} 
        // onEdit={onEditMovie} 
        // onDelete={onDeleteMovie} 
    />
</article>
  )
}

export default HomePage