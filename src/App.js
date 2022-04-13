import './App.css';
import Navbar from './components/1 . Navbar/Navbar';
import About from './components/3 . About/About';
import Home from './components/2 . Home/Home';
import { Switch, Route } from 'react-router-dom'
import { Contact } from './components/6 . Contact Me/Contact';
import Skills from './components/5 . My Skills/Skills';
import Work from './components/4 . My Work/Work';
function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/skills'>
            <Skills />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
    </>
  );
}

export default App;
