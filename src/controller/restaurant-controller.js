// Restaurant Controller
const restaurantController = {
    // Menu data
    menu: [
        { name: "Pizza", price: 10 },
        { name: "Burger", price: 8 },
        // Add more menu items as needed
    ],

    // Method to display the menu
    displayMenu: function() {
        console.log("Menu:");
        this.menu.forEach(item => {
            console.log(`${item.name}: $${item.price}`);
        });
    },

    // Method to process an order
    processOrder: function(itemName) {
        const selectedItem = this.menu.find(item => item.name === itemName);
        if (selectedItem) {
            console.log(`Processing order: ${itemName}`);
            // Additional logic to process the order (e.g., payment, preparation)
        } else {
            console.log(`Sorry, ${itemName} is not available on the menu.`);
        }
    },

    // Method to handle reservations
    makeReservation: function(date, time, partySize) {
        console.log(`Making a reservation for ${partySize} people on ${date} at ${time}.`);
        // Additional logic to handle reservations (e.g., check availability, confirm booking)
    }
};

// Example usage
restaurantController.displayMenu();
restaurantController.processOrder("Pizza");
restaurantController.makeReservation("2024-04-07", "18:00", 4);
