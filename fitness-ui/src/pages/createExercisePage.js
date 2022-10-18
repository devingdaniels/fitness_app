import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Helper functions
import {isValidExerciseEntries } from '../utils/HelperFunctions';

// Components 



const CreateExercisePage = () => {

  const navigate = useNavigate();

  // Component state variables
  const [name, setName] = useState('') 
  const [reps, setReps] = useState(0)
  const [weight, setWeight] = useState(0)
  const [unit, setUnit] = useState('lbs')
  const [date, setDate] = useState('')

  const addExercise = async () =>{
    // Check for valid data before involving server-side code
    if (isValidExerciseEntries(name, reps, weight, unit, date)){      
      const newExercise = ({
        name: name,
        reps: reps,
        weight: weight, 
        unit: unit, 
        date: date
      })
      // Make HTTP request using post and newExercise object
      const response = await fetch('/exercise', {
      method: 'post',
      body: JSON.stringify(newExercise),
      headers: {'Content-Type': 'application/json',}
    })
    // Check for success of failure
    if (response.status === 201){
      alert('Exercise was successfully added')
      navigate('/')
    }    
    else {
      const errMessage = await response.json();
      alert(`Failed to add document. Status ${response.status}. ${errMessage.Error}`);
    }    
    }else {

    }
  }

  
  return (   
 <>
      <article>      
            <h2>Add Exercise</h2>
            <p>Use the form to add a new exercise </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What exercise did you do?</legend>
                    <label htmlFor="name">Exercise Name</label>
                    <input
                        type="text"
                        placeholder="Bench Press"
                        value={name}                        
                        id="name"
                        onChange={e => setName(e.target.value)} 
                        required
                        minLength={1}
                        />
                    
                    <label htmlFor="year">Total Reps</label>
                    <input
                        type="number"
                        placeholder={'e.g 12'}
                        required
                        min={1}
                        onChange={e => setReps(e.target.value)} 
                        id="year" />

                    <label htmlFor="weight">Total Weight</label>
                    <input
                        type="number"
                        placeholder={'e.g 125'}                        
                        required
                        min={1}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

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
                        required
                        min = {new Date().toLocaleDateString('en-ca')}
                        />

                    <label htmlFor="submit">
                    <button
                        type='submit'
                        onClick={addExercise}
                        id="submit"
                    >Add</button></label>
                </fieldset>
                </form>
            </article>
    </>
  )
}

export default CreateExercisePage

