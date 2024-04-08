// Define a menu item controller object
const MenuItemController = {
    // Function to add a menu item to the cart
    addToCart: function(itemId) {
        // Assuming there's a cart object defined elsewhere
        // Here, we're just logging the selected item ID to simulate adding it to the cart
        console.log("Added item with ID:", itemId);
    }
};

// Function to add a menu item to the cart when the "Add to Cart" button is clicked
function addToCart(itemId) {
    MenuItemController.addToCart(itemId);
}
