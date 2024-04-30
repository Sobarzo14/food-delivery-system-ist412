const request = new XMLHttpRequest();

function addItem() {
    const form = document.querySelector('#addFoodItem');
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
}

function addRestaurant() {
    const form = document.querySelector('#addRestaurant');
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);

    request.open("POST", `http://127.0.0.1:3000/addRestaurant`);
    console.log(typeof(formProps));
    request.send(formProps);
}

function getRestaurants() {
    request.open("GET", `http://127.0.0.1:3000/getAll`, true)
    request.onload = function () {
        let data = JSON.parse(this.response);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            var option = document.createElement("option");
            option.text = element.name;
            option.value = element.name;
            var select = document.getElementById("restaurantsSelect");
            select.appendChild(option);
        }
    }
    request.send();
}

getRestaurants();