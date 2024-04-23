// Define routes and their corresponding handlers
const routes = {
    '/': home,
    '/about': about,
    '/contact': contact
};

// Function to navigate to the specified route
function navigateTo(route) {
    // Get the corresponding handler function for the route
    const handler = routes[route];
    if (handler) {
        // Call the handler function
        handler();
    } else {
        // If route not found, display an error message or redirect to a default route
        console.error('Route not found');
        // You can redirect to a default route like this:
        // navigateTo('/');
    }
}

// Handler function for the home route
function home() {
    console.log('Welcome to the home page!');
    // Here you can manipulate the DOM to display the home page content
}

// Handler function for the about route
function about() {
    console.log('This is the about page.');
    // Here you can manipulate the DOM to display the about page content
}

// Handler function for the contact route
function contact() {
    console.log('Contact us.');
    // Here you can manipulate the DOM to display the contact page content
}

// Function to initialize the router
function initRouter() {
    // Get the current route from the URL
    const currentRoute = window.location.pathname;
    // Navigate to the current route
    navigateTo(currentRoute);
}

// Initialize the router when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initRouter);
