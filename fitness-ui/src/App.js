// Import dependencies 
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';

// Components
import Navigation from './components/Nav'
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage'
import CreateExercisePage from './pages/createExercisePage'
import EditExercisePage from './pages/EditExercisePage'

function App() {
  // State to track array of exercise objects
  const [exercise, setExercise] = useState([])
  return (
    <>
      <header>
        <h1>ExTrack</h1>
        <p>Add and track all your fitness exercises!</p>
      </header>
      <Navigation/>
      <main>      
        <Routes>
          <Route path='/' element={<HomePage setExercise={setExercise}/>} />
          <Route path='add-exercise' element={<CreateExercisePage/>} />
          <Route path='edit-exercise' element={<EditExercisePage exercise={exercise}/>} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
