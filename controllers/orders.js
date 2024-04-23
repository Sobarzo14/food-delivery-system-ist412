// Define an array of orders
const orders = [
    { id: 1, product: 'Laptop', quantity: 2 },
    { id: 2, product: 'Smartphone', quantity: 1 },
    { id: 3, product: 'Headphones', quantity: 3 }
];

// Function to display orders
function displayOrders() {
    // Get the container element to display orders
    const ordersContainer = document.getElementById('orders-container');

    // Clear any existing content in the container
    ordersContainer.innerHTML = '';

    // Create a heading for the orders
    const heading = document.createElement('h2');
    heading.textContent = 'Orders';
    ordersContainer.appendChild(heading);

    // Create an unordered list to display orders
    const ul = document.createElement('ul');

    // Loop through the orders and create list items for each order
    orders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `Order ID: ${order.id} - Product: ${order.product}, Quantity: ${order.quantity}`;
        ul.appendChild(li);
    });

    // Append the list to the orders container
    ordersContainer.appendChild(ul);
}

// Call the function to display orders when the page loads
window.addEventListener('load', displayOrders);
