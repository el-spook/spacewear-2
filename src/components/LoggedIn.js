// A functional component that returns an h1 with the user's name:
function Welcome(props) {
    return (
        <div>
            <h1 id="welcome">Welcome back, {props.name}!</h1>
        </div>
    )
}

// A functional component that returns an h1 saying how to sign in:
function SignUp() {
    return (
        <div>
            <h1 id="welcome">Log in on your profile page</h1>
        </div>
    )
}

// Create a functional component that checks props to see if the user is logged in or not: 
function LoggedIn(props) {
    const logged = props.isLoggedIn;
    const userName = props.name;

    // If the user is logged in, return the Welcome component. If not, return the SignUp component.
    if (logged === true) {
        return <Welcome name={userName} />
    } else {
        return <SignUp  />
    }
}

// Export the component so it can be used by Header.js.
export default LoggedIn;