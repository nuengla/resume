import './App.css';
import Navbar from './components/Navbar'
import Home from './content/Home'
import About from './content/About'
import Education from './content/Education'
import Skills from './content/Skills'
import Contact from './content/Contact'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
 


  return (
    <Router>

      <div className="App">
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route >
        <Route exact path='/About'>
          <About />
        </Route>
        <Route exact path='/Education'>
          <Education />
        </Route>
        <Route exact path='/Skills'>
          <Skills />
        </Route>
        <Route exact path='/Contact'>
          <Contact />
        </Route>
    </div>
    </Router>
    
        
  );
}

export default App;
