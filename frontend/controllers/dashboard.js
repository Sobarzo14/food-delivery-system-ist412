const request = new XMLHttpRequest()

function getRestaurants() {
    request.open("GET", `http://127.0.0.1:3000/getAll`, true)
    request.onload = function () {
        let data = JSON.parse(this.response);
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            document.querySelector(".container").innerHTML +=
                `<div class="card">
                <img src="${element.image}" width="200px" alt="${element.name} Image">
                <h2 id="name">${element.name}</h2>
                <button id="${element.name}" onclick="getMenu(this.id)">View Menu</button>
            </div>`
        }
    }
    request.send();
}
function getMenu(button) {
    let restaurant = button;
    request.open("GET", `http://127.0.0.1:3000/getMenu/${restaurant}`, true)
    request.onload = function () {
        let data = JSON.parse(this.response);
        console.log(data);
        document.querySelector(".container").innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            document.querySelector(".container").innerHTML +=
                `<div class="card" onclick="getMenu(this)">
                <img src="${element.image}" width="200px" alt="${element.name} Image">
                <h2 id="name">${element.name}</h2>
                <button id="${element.name}" onclick="addToOrder(this.id)">Add to order</button>
            </div>`
        }
    }
    request.send();
}

function addToOrder(item) {
    request.open("PUT", `http://127.0.0.1:3000/addToOrder/${item}`, true)
    request.send();

    console.log(item)
}

getRestaurants();