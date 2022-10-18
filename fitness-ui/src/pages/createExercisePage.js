import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateExercisePage = () => {

  const navigate = useNavigate();

  // Component state variables
  const [name, setName] = useState('') 
  const [reps, setReps] = useState(0)
  const [weight, setWeight] = useState(0)
  const [unit, setUnit] = useState('')
  const [date, setDate] = useState('')

  const addExercise = async () =>{
    const newExercise = ({
      name: name,
      reps: reps,
      weight: weight, 
      unit: unit, 
      date: date
    })
    console.log(newExercise)
    const response = await fetch('/exercise', {
      method: 'post',
      body: JSON.stringify(newExercise),
      headers: {'Content-Type': 'application/json',}
    })

    if (response.status === 201){
      alert('Exercise was successfully added')
      navigate('/')
    }
  }

  
  return (   
 <>
      <article>
            <h2>Add an exercise in the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which movie are you adding?</legend>
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
                        placeholder={reps}
                        required
                        min={1}
                        onChange={e => setReps(e.target.value)} 
                        id="year" />

                    <label htmlFor="weight">Total Weight</label>
                    <input
                        type="number"
                        placeholder={125}
                        value={weight}
                        required
                        min={1}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label htmlFor="unit">Units</label>
                    <select name="unit" id="unit" required onChange={e => setUnit( e.target.value)}>
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
                        required/>

                    <label htmlFor="submit">
                    <button
                        type='submit'
                        onClick={addExercise}
                        id="submit"
                    >Add</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
    </>
  )
}

export default CreateExercisePage

