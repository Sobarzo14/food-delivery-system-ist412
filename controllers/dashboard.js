// Define a function to display information on the dashboard
function displayDashboardInformation() {
    // Retrieve dashboard container element
    const dashboardContainer = document.getElementById('dashboard-container');
    
    // Create and append elements to display information
    const heading = document.createElement('h1');
    heading.textContent = 'Dashboard Information';
    dashboardContainer.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a sample dashboard displaying information.';
    dashboardContainer.appendChild(paragraph);

    const dataDiv = document.createElement('div');
    dataDiv.textContent = 'Placeholder for data visualization';
    dashboardContainer.appendChild(dataDiv);
}

// Call the function to display dashboard information when the page loads
window.addEventListener('load', displayDashboardInformation);
