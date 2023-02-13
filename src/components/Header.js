//Import the images:
import logo1 from '../images/Logo_3.png';
import logo2 from '../images/Logo_4.png';
// Import the component that will create the welcome message or button:
import LoggedIn from './LoggedIn';

// Create a functional component: 
// name the props as parameters so they can be sent to LoggedIn.js:
function Header({ name, isLoggedIn }) {
    // Return a div containing the two logos, and the LoggedIn component - send props to that component:
    return (
        <div id="header">
            <img id="logo2" src={logo2} alt="Logo2" />
            <LoggedIn name={name} isLoggedIn={isLoggedIn}  />
            <img id="logo1" src={logo1} alt="Logo1" />
        </div>
    )
}

// Export the component so it can be used by App.js.
export default Header;