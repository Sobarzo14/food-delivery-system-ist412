class Menu {
    constructor() {
        this.items = []; // Array to store MenuItem objects
    }

    // Method to add a new item to the menu
    addItem(item) {
        this.items.push(item);
    }

    // Method to remove an item from the menu by its name
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    }

    // Method to get the total number of items on the menu
    getItemCount() {
        return this.items.length;
    }

    // Method to display all items on the menu
    displayMenu() {
        if (this.items.length === 0) {
            console.log("Menu is empty.");
        } else {
            console.log("Menu:");
            this.items.forEach(item => console.log(item.toString()));
        }
    }
}