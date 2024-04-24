const request = new XMLHttpRequest();

function getOrder() {
    request.open("GET", `http://127.0.0.1:3000/getOrders`, true)
    request.onload = function () {
        let data = JSON.parse(this.response);
        console.log(data);
        data.order.forEach(element => {
            document.querySelector("#table").innerHTML +=
                `
                <td>${element.name}</td>
                <td>${element.calories}</td>
                <td>${element.price}</td>
                `
        });
        document.querySelector("#table").innerHTML += `<div>Total: $${data.total}</div>`
    }
    request.send();
}

getOrder();

<tr>
    <td>1</td>
    <td>Pizza, Salad</td>
    <td>$20.00</td>
    <td>Processing</td>
    <td>
        <a href="order.html">
            <button onclick="viewOrderDetails(1)">View Details</button>
        </a>
        <button onclick="cancelOrder(1)">Cancel</button>
    </td>
</tr>