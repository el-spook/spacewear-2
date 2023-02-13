//Import the images:
import gloves from '../images/lunar_gloves.jpg';
import helmet from '../images/lunar_helmet.jpg';
import overshoes from '../images/lunar_overshoe.jpg';
import spacesuit from '../images/spacesuit.jpg';

// Create an array of objects to contain product details:
const products = [
    {
      name: 'Lunar Helmet',
      text: 'Life is easier when you can pull down this visor. Anti-glare and protection from all UV and IR comes as standard.',
      price: '£5449',
      image: helmet
    },
    {
      name: 'Lunar Overshoes',
      text: 'Every step is a giant leap for your survival prospects (and your self-image).',
      price: '£3049',
      image: overshoes
    },
    {
      name: 'Lunar Gloves',
      text: 'Gauntlets to help you navigate the worst that this century has to offer.',
      price: '£4229',
      image: gloves
    },
    {
      name: 'Lunar Spacesuit',
      text: 'Encapsulate yourself in futuro-nostalgic softness and insulate yourself from reality.',
      price: '£15,349',
      image: spacesuit
    }
]
  
// Create a functional component: 
function Product() {
    // Use the map method to iterate through the array of objects and create a new array:
    const productList = products.map((item, index) => {
        // store the index value to be a key later:
        const keyValue = `item${index}`
        // Create a list item for each item in the array, consisting of an h2, image, p element and another h2:
        return (
            <li className = "spaceProducts" key={keyValue}>
                <h2>{item.name}</h2>
                <img src = {item.image} alt = {item.name}/>
                <p id="productText">{item.text}</p>
                <h2 id="price">{item.price}</h2>
            </li>
        );
    });
    // Return a div containing the h1 for this section, and a <ul> containing the list items created above:
    return (
        <div id ="shop">
            <h1>Shop Our Collection</h1>
            <ul id="products">
                {productList}
            </ul>
        </div>
    )
}

// Export the component so it can be used by App.js.
export default Product;
