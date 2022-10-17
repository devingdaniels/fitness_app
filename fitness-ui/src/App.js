// Import dependencies 
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Components
import Navigation from './components/Nav'
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage'
import CreateExercisePage from './pages/createExercisePage'
import EditExercisePage from './pages/EditExercisePage'

function App() {
  return (
    <>
      <BrowserRouter>

      <header>
        <h1>Fitness Tracker App</h1>
        <p>Add and track all your fitness exercises!</p>
      </header>

      <Navigation/>

      <main>
      <Routes>
        <Route>
          <HomePage path="/" exact></HomePage>
        </Route>
        
        <Route>
          <CreateExercisePage path="add-exercise"></CreateExercisePage>
        </Route>

        <Route>
          <EditExercisePage path="edit-exercise"></EditExercisePage>
        </Route>
        
      </Routes>
      </main>

      <footer>
        <Footer/>
      </footer>

    </BrowserRouter>
    </>
  );
}

export default App;
