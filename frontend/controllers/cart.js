const request = new XMLHttpRequest();

function getOrder() {
    request.open("GET", `http://127.0.0.1:3000/getOrder`, true)
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