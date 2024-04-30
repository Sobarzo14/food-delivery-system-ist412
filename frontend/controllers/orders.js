const request = new XMLHttpRequest();

function getOrders() {
    request.open("GET", `http://127.0.0.1:3000/getOrders`, true)
    request.onload = function () {
        let data = JSON.parse(this.response);
        console.log(data);
        data.forEach(element => {
            let result = element.order.map(a => a.name);
            document.querySelector("#table").innerHTML +=
                `
                <td>${element.id}</td>
                <td>${result}</td>
                <td>$${element.total}</td>
                <td>${element.review}</td>
                <td>
                    <a href="order.html">
                        <button onclick="viewOrderDetails()">View Details</button>
                    </a>
                    <button id="${element.id}" onclick="deleteOrder(this.id)">Delete</button>
                </td>
                `
        });
    }
    request.send();
}

function deleteOrder(id) {
    request.open("DELETE", `http://127.0.0.1:3000/deleteOrder/${id}`, true)
    request.send();
}

function clearOrders() {
    request.open("DELETE", `http://127.0.0.1:3000/deleteOrders/`, true)
    request.send();
}

getOrders();