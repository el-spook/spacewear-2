// Create an array to contain a list of paragraphs about the company:
const companyInfo = [
    'SPACEWEAR was founded in 2023 in response to a significant gap in the fashion market: an overwhelming demand for astronaut-themed clothing.',
    'We have based our first capsule collection on the early Apollo missions of the late-60s and early 70s. These are the classic astronaut pieces known and loved by millions around the globe.',
    'No other company provides both nostalgia and futurism; both sustainability and rocket-fuel.',
    'Get your limited edition pieces while you can. How else will you escape?'
]

// Create a functional component: 
function Landing() {
    // Use the map method to iterate through the array and create a new array:
    const compDesc = companyInfo.map((para, index) => {
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
        <div id ="landing">
            <h1>About Us</h1>
            <ul id="aboutUs">
                {compDesc}
            </ul>
        </div>
    )
}

// Export the component so it can be used by App.js.
export default Landing;