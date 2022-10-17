import 'dotenv/config';
import express from 'express';
import * as exercises from './fitness-model.mjs';

// Express server running on port 3000
const PORT = process.env.PORT; 
const app = express();

// Middleware function to parse PUT and POST requests 
app.use(express.json());


// CREATE controller
app.post('/exercise', (req, res) => {
    // Create a new instance of a movie by calling () in model layer
    const name = req.body.name
    const reps = req.body.reps
    const weight = req.body.weight
    const unit = req.body.unit
    const date = req.body.date
    // Returns a promise 
    exercises.createExercise(name, reps, weight, unit, date)
    // Send back code 201 (request success and resource created)
    // Send back new json exercise object
        .then(exercise => {
            res.status(201).json(exercise)
        })
    // Catch failures 
    // Send back status code 400 (server cannot or failed to process the request )
        .catch(error =>{
            console.log(error)
            res.status(400).json({Error: "Creation of a document failed due to invalid syntax."})
        })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});