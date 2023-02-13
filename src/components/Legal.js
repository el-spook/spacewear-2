// Create an array to contain a list of paragraphs about the legal policies:
const legalInfo = [
    'SPACEWEAR is founded on reliability and safety, and your happiness and satisfaction is our priority.',
    'If you find yourself lacking in either, please get in touch with us. Our customer care experts will quickly arrange for a replacement or a full refund if you come across any problems within 60 days.',
    'We are passionate about protecting your data. Contact us to find out more about the lengths we go to in dealing securely with our customer information.',
    'Any other questions or issues? Set your satellite phone to our frequency or use morse code with your long-wave radio.'
]

// Create a functional component: 
function Legal() {
    // Use the map method to iterate through the array and create a new array:
    const legalDesc = legalInfo.map((para, index) => {
        // store the index value to be a key later:
        const keyValue = `para${index}`
        // Create a list item for each item in the array, consisting of an p element:
        return (
            <li className = "paragraph" key={keyValue}>
                <p>{para}</p>
            </li>
        );
    });
    // Return a div containing the h1 for this section, and a <ul> containing the list items created above:
    return (
        <div id ="legal">
            <h1>Your Rights and Our Policies</h1>
            <ul id="policies">
                {legalDesc}
            </ul>
        </div>
    )
}

// Export the component so it can be used by App.js.
export default Legal;