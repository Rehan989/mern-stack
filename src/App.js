// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar'
import Home from './Components/home'
import About from './Components/about'
import Contact from './Components/contact'
import Signup from './Components/signup';
import Login from './Components/login'
import { Route } from 'react-router';
import Error from './Components/error'
import { Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route>
        <Error/>
      </Route>
      </Switch>
    </>
  );
}

export default App;
