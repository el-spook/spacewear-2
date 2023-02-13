// Import the resources to be able to use <Link>:
import {Link} from 'react-router-dom'

// Create a functional component: 
function Navigation() {
    // Return a nav element containing a list of links to other pages:
    return (
        <div >
            <nav>
                <div id ="navigation">
                    <Link className="myLink" to = "/">Home</Link>
                    <Link className="myLink" to = "/shopping">Shop</Link>
                    <Link className="myLink" to = "/profile">Profile</Link>
                    <Link className="myLink" to = "/legal">Legal</Link>
                    <Link className="myLink" to = "/calc">Calculator</Link>
                </div>
            </nav>
        </div>
    )
}

// Export the component so it can be used by App.js.
export default Navigation;