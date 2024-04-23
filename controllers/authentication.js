const users = [
    { username: "user", password: "user", role: "user" },
    { username: "admin", password: "admin", role: "admin" }
];

// Function to authenticate users
function authenticate(username, password) {
    // Find the user with the given username and password
    const user = users.find(user => user.username === username && user.password === password);

    // If user is found, return their role, otherwise return null
    return user ? user.role : null;
}

// Example usage:
document.querySelector("")
const role = authenticate(username, password);
if (role) {
    console.log(`Authentication successful. User role: ${role}`);
} else {
    console.log("Authentication failed. Invalid username or password.");
}