import { appetizers } from "./menuCards/appetizers";
import mainCourse from "./menuCards/main-course";
import dessert from "./menuCards/dessert";

const appetizersArray = [
    'Caprese Skewers: Cherry tomatoes, fresh mozzarella balls, and basil leaves threaded onto skewers and drizzled with balsamic glaze.',
    'Stuffed Mushrooms: Large mushrooms filled with a mixture of breadcrumbs, garlic, herbs, and cheese, then baked until golden brown.',
    'Feta Phyllo Triangles: Spinach and feta cheese wrapped in flaky phyllo dough and baked until crispy.',
    'Bruschetta: Toasted baguette slices topped with a mixture of diced tomatoes, garlic, basil, olive oil, and balsamic vinegar.',
    'Potato Fries: Baked or fried sweet potato fries served with a dipping sauce like garlic aioli or sriracha mayo.'
];

const mainCourseArray = [
    'Lasagna: Layers of lasagna noodles, marinara sauce, ricotta cheese, and a variety of roasted or sautéed vegetables like zucchini, eggplant, spinach, and bell peppers, baked until bubbly and golden',
    'Quinoa: Bell peppers stuffed with a mixture of cooked quinoa, black beans, corn, diced tomatoes, onions, and spices, topped with cheese and baked until tender.',
    'Parmesan: Slices of breaded and baked eggplant layered with marinara sauce and melted mozzarella cheese, served with spaghetti or a side salad.',
    'Vegetarian Chili: A hearty and flavorful chili made with beans, tomatoes, onions, bell peppers, corn, and spices, served with toppings like shredded cheese, sour cream, avocado, and cilantro.',
    'Risotto: Creamy risotto cooked with mushrooms, onions, garlic, white wine, and vegetable broth, finished with butter and Parmesan cheese for a luxurious and comforting dish.',
];

const dessertArray = [
    'Fruit Salad: A refreshing and healthy dessert made with a variety of fresh fruits such as strawberries, blueberries, grapes, pineapple, and kiwi, served with a drizzle of honey or a dollop of yogurt.',
    'Chocolate Chip Cookies: Classic cookies made with chocolate chips, butter, sugar, flour, and vanilla extract, baked until golden brown and deliciously chewy.',
    'Banana Bread: Moist and flavorful bread made with ripe bananas, flour, sugar, eggs, butter, and a hint of cinnamon, perfect for breakfast or dessert.',
    'Pavlova: Light and airy meringue dessert topped with whipped cream and fresh fruit such as berries, kiwi, and passionfruit, perfect for a stunning and elegant dessert.'
];

const food = {
    'Appetizers': appetizersArray,
    'Main Course': mainCourseArray,
    'Dessert': dessertArray,
}

const content = document.querySelector("#content");

// Function to render the menu
const renderMenu = () => {
    content.innerHTML = ""; // Clear existing content
    content.appendChild(appetizers(food)); // Render appetizers by default
}

// Export the menu function
const menu = () => {
    // Render the menu initially
    renderMenu();

    // Set up event listeners for menu navigation
    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('main')) {
            console.log("Inside main: ");
            renderMainCourse();
        } else if (target.classList.contains('appetizer')) {
            console.log("Inside Appetizer: ");
            renderAppetizers();
        } else if (target.classList.contains('dessert')) {
            console.log("Inside Dessert: ");
            renderDessert();
        }
    });
}

// Functions to render different menu sections
const renderMainCourse = () => {
    content.innerHTML = "";
    content.appendChild(mainCourse(food));
}

const renderAppetizers = () => {
    content.innerHTML = "";
    content.appendChild(appetizers(food));
}

const renderDessert = () => {
    content.innerHTML = "";
    content.appendChild(dessert(food));
}

export default menu;
