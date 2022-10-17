import 'dotenv/config';
import express, { response } from 'express';
import * as exercises from './fitness-model.mjs';

// Helper functions
import { isValidExerciseEntries } from './helperFunctions.mjs';

// Express server running on port 3000
const PORT = process.env.PORT; 
const app = express();

// Middleware function to parse PUT and POST requests 
app.use(express.json());


// CREATE controller
app.post('/exercise', (req, res) => {
    // Extract values from req object
    const name = req.body.name
    const reps = req.body.reps
    const weight = req.body.weight
    const unit = req.body.unit
    const date = req.body.date
    // Validate valid data
    if (isValidExerciseEntries(name, reps, weight, unit, date)){
        // Returns a promise 
        exercises.createExercise(name, reps, weight, unit, date)
        // Send back code 201 (request successful and resource created)
        // Send back new json exercise object
            .then(exercise => {
                res.status(201).json(exercise)
                // Content type: application/json sent by default  
            })
        // Catch failures 
        // Send back status code 400 (server cannot or failed to process the request )
            .catch(error =>{
                console.log(error)
                res.status(400).json({Error: "Creation of a document failed due to invalid syntax."})
            })
    }
    else{
        res.status(400).json({Error: "Valid query but one or more values is invalid."})
    }
})

// RETRIEVE controllers
// GET exercise by ID - this URL includes an _id parameter, which is a property on the req.params object
app.get('/exercise/:_id', (req, res) =>{
    const exerciseID = req.params._id
    // Find the exercise from the DB (returns a promise)
    exercises.findExerciseById(exerciseID)
    // If successful, and exercise exists, send back the exercise 
        .then(exercise =>{
            if (exercise !== null){
                console.log('Successfully retrieved item by ID')
                res.send(exercise)
                // Status code: 200 sent by default
                // Content type: application/json sent by default  
            }
            // Successful but exercise was not in database
            else{
                res.status(404).json({Error: "Document not found"})
                // Content type: application/json sent by default  
            }            
        })
        .catch(error =>{
            console.log(error)
            res.status(400).json({ error: 'Request to retrieve document failed' })
        })
})

// RETRIEVE Exercise collection
app.get('/exercise', (req, res) =>{
    // exercises.findExercises takes a filter param
    // Only interested in the entire collection, so pass filter as an empty object
    const filter = {}
    exercises.findExercises(filter)
        .then(exercises =>{
            res.send(exercises)
        })
        .catch(error=>{
            res.status(404).json({error: "Failed to retrieve the collection"})
        })
})

// UPDATE controller 
app.put('/exercise/:_id', async(req, res) =>{

    const response = await exercises.findExerciseById(req.params._id)

    if (response !== null){

        const id = req.params._id
        const name = req.body.name
        const reps = req.body.reps
        const weight = req.body.weight
        const unit = req.body.unit
        const date = req.body.date
    
        const count = await exercises.replaceExercise(id, name, reps, weight, unit, date)
        
        res.json({
            name: name, 
            reps: reps,
            weight: weight,
            unit: unit,
            date: date
        })

        console.log(response)
        console.log(count)
    }
    else {
        res.status(400).json({Error: "Invalid request"})
    }


    // // Extract values from req object
    // const name = req.body.name
    // const reps = req.body.reps
    // const weight = req.body.weight
    // const unit = req.body.unit
    // const date = req.body.date
    // // Validate valid data
    // if (isValidExerciseEntries(name, reps, weight, unit, date)){
    //     exercises.replaceExercise(req.params._id, name, reps, weight, unit, date)
    //     // Returns promise, if successful, response will be the modified count
    //         .then(count =>{
    //             if (count === 1){
    //                 res.json({
    //                     name: name, 
    //                     reps: reps,
    //                     weight: weight,
    //                     unit: unit,
    //                     date: date
    //                 })
    //             }
    //         })
    // }
})













app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});