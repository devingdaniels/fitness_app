import 'dotenv/config';
import express from 'express';
import * as exercises from './fitness-model.mjs';

// Express server running on port 3000
const PORT = process.env.PORT; 
const app = express();

// Middleware function to parse PUT and POST requests 
app.use(express.json());







app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});