const request = new XMLHttpRequest();


function login() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    // request.open("POST", "https://api.example.com/login", true);
    // const loginInfo = JSON.stringify(
    //     {
    //         "username": username,
    //         "password": password
    //     });
    // request.send(loginInfo);
    if (username === 'root' && password === 'root') {
        window.location.href = './frontend/views/dashboard.html'; // Redirect to page1.html
    } else if (username === 'admin' && password === 'admin') {
        window.location.href = './frontend/views/admin_page.html'; // Redirect to page2.html
    } else {
        alert('Invalid username or password');
    }
}