# Food Delivery System

## Instructions for Running the system
Go to https://github.com/Sobarzo14/food-delivery-system-ist412 for better view of this file

1. Download and extract the zip file 
2. If you don't have node.js installed, make sure to install it otherwise it won't work: Here is a link to instructions for installing [Here](https://nodejs.org/en/download)
3. Open command line and navigate to the backend folder
4. When you are in the backend folder, run the following command: node index.js (This begins the server)
5. In your file explorer go to the frontend folder, and right click on the index.html file, and then click on open with Chrome (or any browser)
6. If that doesn't work, you can use the link below, but it tends to not work as well as the local instance. 

**When you want to see the system running live, use the following link: [Here](https://sobarzo14.github.io/food-delivery-system-ist412/)**

## M03-A04 Implemented Design Patterns
### Abelardo Sobarzo:
Prototype
- The Items in the model folder are classes that take in properties from JSON arrays that create objects that from a single protype
    - src > model
Home Link 
- There is a Home link for all of our pages from to go back to the index.html page
    - index.html <li><a href="#">Home</a></li>

### Sam Kenny
Decorator
- Using the Javascript objects, we pass them into a Vue file where they are transformed into User Interface objects to be displayed on the screen
Sort By
- The Restaurants use a function that sort the restaurants by the name property of the object

### Heather Leins
Factory Method
- The Menu Item class has two sub-classes Drinks and Food and each have a separate section in the Menu
Dashboard
- When you first open up the system, a dashboard greets you with the current restaurants to which you can click and see the menu (In Progress)

## M03-A05 One Implemented Use Case
We implemented the use case of browsing restaurants. When you open the application, it allows you to log in. Once logged in you are presented with a screen with the available restaurants. We have the MVC classes in the src file and in each corresponding file. 
1 Abelardo Sobarzo
33% of the work by constructing the models for the three objects and the connection to the server and database

2 Sam Kenny 
33% of the work by creating the controllers for the objects and the login screen

3 Heather Leins
33% of the work by creating the dashboard of the application to complete the use case

## M04-A03 Two Implemented Use Cases Integrated with First Usecase + Login/Authentication Implementation with Clean, Refactored Code

### Part 1.
Firstly, we prioritized addressing inconsistent naming conventions and lack of documentation. Clear and concise documentation for classes, methods, and variables, following a consistent naming convention, was added throughout the codebase. This immediate action significantly improved code readability and maintainability, mitigating potential future issues stemming from inconsistent naming practices.

Secondly, we tackled the lack of modularization by separating controller logic from DOM manipulation code, enhancing code organization, testability, and maintainability. This step was deemed a medium priority and resulted in more cohesive and scalable code architecture.

Furthermore, the team addressed the issue of global scope pollution by encapsulating objects and functions within appropriate modules, reducing the risk of variable conflicts and enhancing modularity. This high-priority task led to decreased bugs and improved code maintainability.

Additionally, encapsulation was enforced to prevent potential data corruption and reduce coupling within the codebase. By providing getter and setter methods to access and modify menu items, the team ensured data integrity and improved code organization.

The team also implemented error handling mechanisms to address exceptional scenarios and ensure code correctness, which included unit and integration testing. This medium-priority task increased the robustness of the codebase, particularly in handling user input and preventing runtime errors.

To enhance extensibility, the 'Menu' class was refactored to accommodate future modifications easily, such as sorting or filtering menu items. This medium-priority task improved code flexibility and scalability, allowing for seamless integration of new features.

Moreover, code duplication was mitigated by implementing a 'toString' method in the 'MenuItem' class to provide a consistent way of displaying menu item information. This low-priority task reduced complexity and minimized the risk of introducing bugs during code changes.

Unused code was also identified and removed to streamline the codebase, improving readability and decreasing complexity. While considered a low-priority task, it contributed to overall code cleanliness and maintainability.

Finally, hardcoded values were replaced with configurable options to improve flexibility and maintainability. This effort ensured that future modifications or extensions could be implemented more seamlessly without the need for extensive code changes.

Overall, the team's systematic approach to refactoring addressed various issues, resulting in a more robust, maintainable, and scalable codebase poised for future development and enhancements.

### Part 2
The code currently follows the MVC model by having three different folders that delegate each task. The models folder in the backend folder define the properties of the objects that will be used. The controllers folder takes care of the functionality in the system like routing and sending requests to get and push data into the database. The views folder contains all of the different pages and their user interfaces

Abelardo: Took care of the connections with the requests and the models so the databases can be used to post data

Sam: Designed the controllers so the user and the system can communicate with each other as the connections

Heather: Designed the user interfaces to be visually pleasing and functional

## Final Part
Abelardo Sobarzo: 
- Connected the client with the server with API endpoints
- 33%

Heather Leins:
- Created backend serverside database infrastructure using JSON and Vercel
- 33%

Sam Kenny:
- Created client user interfaces and also connected them to the logic behind the controllers
- 33%