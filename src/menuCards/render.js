// Import the necessary functions
import appetizers  from "./menuCards/appetizers";
import mainCourse from "./menuCards/main-course";
import dessert from "./menuCards/dessert";


const food = {
    'Starters': ['Gobi', 'Fries', 'Paneer'],
    'Main Course': ['Rice', 'Thali', 'Noodles'],
    'Dessert': ['Pastry', 'Ice cream', 'Jamun'],
}

// Get the content container
const content = document.querySelector("#content");

// Render initial content
content.appendChild(appetizers(food));

// Set up event listeners for menu navigation
const mainEvent = document.querySelector('.main');
const dessertEvent = document.querySelector('.dessert');
const appetizerEvent = document.querySelector('.appetizer');

mainEvent.addEventListener('click', () => {
    console.log("Inside main: ");
    renderMainCourse();
});

appetizerEvent.addEventListener('click', () => {
    console.log("Inside Appetizer: ");
    renderAppetizers();
});

dessertEvent.addEventListener('click', () => {
    console.log("Inside Dessert: ");
    renderDessert();
});

// Function to render main course content
function renderMainCourse() {
    content.innerHTML = "";
    content.appendChild(mainCourse(food));
}

// Function to render appetizers content
function renderAppetizers() {
    content.innerHTML = "";
    content.appendChild(appetizers(food));
}

// Function to render dessert content
function renderDessert() {
    content.innerHTML = "";
    content.appendChild(dessert(food));
}

// Export the menu module
export default {
    renderMainCourse,
    renderAppetizers,
    renderDessert
};
