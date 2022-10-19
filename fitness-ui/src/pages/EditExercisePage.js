import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { isValidExerciseEntries } from '../utils/HelperFunctions';

const EditExercisePage = ({exercise}) => {

  const navigate = useNavigate();

  const [name, setName] = useState(exercise.name)
  const [reps, setReps] = useState(exercise.reps)
  const [weight, setWeight] = useState(exercise.weight)
  const [unit, setUnit] = useState(exercise.unit)
  const [date, setDate] = useState(exercise.date)

  const editExercise = async () =>{
    // Make sure all entries have values
    if( isValidExerciseEntries(name, reps, weight, unit, date)){
      // Try to update document with new values
      const response = await fetch(`/exercise/${exercise._id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
          name: name, 
          reps: reps, 
          weight: weight, 
          unit: unit, 
          date: date
      }),
      headers: {'Content-Type': 'application/json'},  
    })
    // Check for success or failure
    if (response.status === 200) {
      alert("Successfully edited document!");
  } else {
      const errMessage = await response.json();
      alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
  }
  navigate('/')
  }
}

  return (
    <>
      <article>
            <h2>Edit an exercise in the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Edit exercise properties</legend>
                    <label htmlFor="name">Exercise Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        required
                        />
                    
                    <label htmlFor="year">Total Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="year" 
                        required/>

                    <label htmlFor="weight">Total Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" 
                        required/>

                    <label htmlFor="unit">Units</label>
                    <select name="unit" id="unit"onChange={e =>setUnit(e.target.value)}
                    required>
                      <option value="lbs" >lbs</option>
                      <option value="kg">kg</option>
                      <option value="miles">miles</option>
                      <option value="meters">meters</option>
                    </select>

                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" 
                        />

                    <label htmlFor="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Update</button></label>
                </fieldset>
                </form>
            </article>
    </>
  )
}

export default EditExercisePage