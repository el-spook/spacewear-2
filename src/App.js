// The main import needed to create the React app:
import React from "react";

// Import the main CSS file that will modify all the components:
import './App.css';
// Import each component to be displayed:
import Product from './components/Product';
import Landing from './components/Landing';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Calculator from './components/Calculator';
import Legal from "./components/Legal";
// import the aspects we need from react to be able to use state and use route/routes:
import { Routes, Route} from 'react-router-dom';
import { useState } from "react";


// Create a function app to handle the log in and to return the components in order.
function App () {
    // Declare the variable that will use state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Define user's name:
    let name = 'Buzz';
  
/* Function that will cause alerts to pop up when the log in/out button is pressed,
and which will toggle the user's sign in status on the button click.*/
const manageLogIn = () => {
  // Checks whether the user is logged in, and returns an alert and sets the state depending on this:
  if (isLoggedIn) {
    alert(`${name}, you have now logged out.`);
    const isLoggedIn = false;
    setIsLoggedIn(isLoggedIn);
    
  } else {
    alert(`Welcome back, ${name}!`);
    const isLoggedIn = true;
    setIsLoggedIn(isLoggedIn);
  }
}

/* Return the elements that the pages will contain in order and uses Routes to show certain components on particular pages.
Three props are sent to the header component and two props are sent to the profile component so they can receive the state from this component.*/
    return (
      <div>
        <Navigation />
        <Header name={name} isLoggedIn={isLoggedIn} manageLogIn={manageLogIn} />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/shopping' element={<Product />} />
          <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn} manageLogIn={manageLogIn} />} />
          <Route path='/calc' element={< Calculator />} />
          <Route path='/legal' element={< Legal />} />
        </Routes>
      </div >
    );
  }


// Export the App component so it can be used by App.js.
export default App;

