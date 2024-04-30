const request = new XMLHttpRequest();


function login() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let exist = false;
    request.open("GET", `http://127.0.0.1:3000/login/${username}/${password}`, true);
    request.onload = function () {
        exist = this.response;
        if (username === 'admin' && password === 'admin') {
            window.location.href = './frontend/views/admin_page.html'; // Redirect to page2.html
        } else if (exist) {
            window.location.href = './frontend/views/dashboard.html'; // Redirect to page2.html
        } else {
            alert('Invalid username or password');
        }
    }
    request.send();
    
}

function signup() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    request.open("POST", `http://127.0.0.1:3000/signup/${username}/${password}`, true);
    request.send();
}