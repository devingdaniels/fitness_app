import 'dotenv/config';
import express, { response } from 'express';
import * as exercises from './fitness-model.mjs';

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
            console.log(error)
            res.status(404).json({error: "Failed to retrieve the collection"})
        })
})

// UPDATE controller 
// ADD ASYNC HANDLER if coded this way 
app.put('/exercise/:_id', async(req, res) => {
 // Query DB and see if document with ID exists
 const response = await exercises.findExerciseById(req.params._id)
 // Validate document
 if (response === null){
     res.status(400).json({Error: "Invalid request"})
 } else {            
        // Save the request body parameters
        const id = req.params._id
        const name = req.body.name
        const reps = req.body.reps
        const weight = req.body.weight
        const unit = req.body.unit
        const date = req.body.date
        // Perform update on using DB method
        // Returns count of documents updated
        const count = await exercises.replaceExercise(id, name, reps, weight, unit, date)
        // Already validated document, verify document update
        if (count === 1){
            res.status(200).json({
                name: name, 
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            })
        }
    } 
})

app.delete('/exercise/:_id', async (req, res) => {
    // Find document by ID
    const response = await exercises.findExerciseById(req.params._id)
    // Validate document in DB
    if (response !== null){ 
    // Model method returns count of deleted documents
       const count = await exercises.deleteById(req.params._id)
        if (count === 1){
            res.status(204).json({Success: "Document deleted successfully"})
        }              
    }
    else {
        res.status(400).json({Error: "Document not found"})
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


