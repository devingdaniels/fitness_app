import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




const EditExercisePage = ({exercise}) => {

  const navigate = useNavigate();


  const [name, setName] = useState(exercise.name)
  const [reps, setReps] = useState(exercise.reps)
  const [weight, setWeight] = useState(exercise.weight)
  const [unit, setUnit] = useState(exercise.unit)
  const [date, setDate] = useState(exercise.date)




  const editExercise = async () =>{
    const response = await fetch(`/exercise/${exercise._id}`, {
      method: 'PUT',
      body: JSON.stringify({ 
        name: name, 
        reps: reps, 
        weight: weight, 
        unit: unit, 
        date: date
    }),
    headers: {'Content-Type': 'application/json',},  
  })

  if (response.status === 200) {
    alert("Successfully edited document!");
} else {
    const errMessage = await response.json();
    alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
}
navigate('/')
}
  


  return (
    <>
      <article>
            <h2>Edit an exercise in the collection</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which movie are you adding?</legend>
                    <label htmlFor="name">Exercise Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"/>
                    
                    <label htmlFor="year">Total Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="year" />

                    <label htmlFor="weight">Total Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />

                    <label htmlFor="unit">Units</label>
                    <input
                        type="text"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit" />

                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label htmlFor="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
    </>
  )
}

export default EditExercisePage