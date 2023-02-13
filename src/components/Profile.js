
/* function component that takes two parameters - they are named, so that 
we don't need to write "props." for the props later on */
const Profile = ({ isLoggedIn, manageLogIn }) => {
// Logic checks if the user is logged in:
    if (isLoggedIn) {
        // If they are, the h3 and button will say how to log out:
        // The button will trigger the manageLogIn() method to change the log in state:
        return (
            <div className="logIn">
                <h3>You can log out of your account here:</h3>
                <div className = "logInButton">
                    <button onClick={manageLogIn}>Log Out</button>
                </div>
            </div>
        )
    } else {
        // If they're logged out, the h3 and button will say how to log in:
        // The button will trigger the manageLogIn() method to change the log in state:
        return (
            <div className="logIn">
                <h3>You can log in to your account here:</h3>
                <div className = "logInButton">
                    <button onClick={manageLogIn}>Log In</button>
                </div>
            </div>
        )
    }
};
// Export the component so it can be used by App.js.
export default Profile;