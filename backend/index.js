const express = require("express");
const cors = require("cors");
const fs = require("fs")
const PORT = 3000;
const app = express()

app.use(cors());

app.post('/login', (req, res) => {

    fs.readFile('/database/users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        const users = JSON.parse(data).users;
        
        // Find user by username and password
        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            return res.status(401).send('Invalid username or password');
        }

        // Redirect to the page associated with the user
        res.redirect(user.page);
    });
});

app.get("/getMenu/:restaurant", (req,res) => {
    fs.readFile("./database/restaurants.json", (err, data) => {
        let json = JSON.parse(data);
        json = json.restaurants;
        json.forEach(element => {
            if (req.params.restaurant == element.name){
                res.send(element.menu);
            }
        });
    })
});

app.get("/getAll/", (req,res) => {
    fs.readFile("./database/restaurants.json", (err, data) => {
        let json = JSON.parse(data);
        json = json.restaurants;
        res.send(json)
    })
});

app.get("/getOrder/", (req,res) => {
    fs.readFile("./database/orders.json", (err, data) => {
        let json = JSON.parse(data);
        json = json.currentOrder;
        res.send(json)
    })
});

app.get("/getOrders/", (req,res) => {
    fs.readFile("./database/orders.json", (err, data) => {
        let json = JSON.parse(data);
        json = json.currentOrder;
        res.send(json)
    })
});


// POST: Add a username to the system (no password or auth required)
// POST: Create a reservation for a given user. It should specify username, start date, start time, and number of hours

app.post("/addRestaurant/:name", (req , res) => {
    let name = req.params.name
    let addedRestaurant = {
        user: name,
        menu: []
    }
    fs.readFile("./database/restaurants.json", (err, data) => {
        let json = JSON.parse(data);
        json = json.restaurants;
        json.push(addedRestaurant);    
        fs.writeFile("reservations.json", JSON.stringify(json), (err) =>{
            if (err) throw err;
        });
    });
})

app.put("/addToOrder/:item", (req , res) => {
    fs.readFile("./database/restaurants.json", (err, data) => {
        let json = JSON.parse(data);
        json = json.restaurants;
        json.forEach(element => {
            element.menu.forEach(item => {
                if (item.name == req.params.item){
                    fs.readFile("./database/orders.json", (err, data) => {
                        let json = JSON.parse(data);
                        console.log(json)
                        let tempArray = json.currentOrder.order;
                        json.currentOrder.total += item.price;
                        tempArray.push(item);
                        json.currentOrder.order = tempArray;  
                        fs.writeFile("./database/orders.json", JSON.stringify(json), (err) =>{
                            if (err) throw err;
                        });
                    });
                }
            })
        });
    });

})

// PUT: Update a reservation for a given user. It should specify username, start date, start time, and number of hours
app.put("/checkOut/", (req, res) => {
    let user = req.params.user
    let date = req.params.date
    let time = req.params.time
    let hours = req.params.hours
    let addedReservation = {
        date: date,
        time: time,
        hours: hours
    }
    fs.readFile("reservations.json", (err, data) => {
        let json = JSON.parse(data);
        let exists = false;
        for (let i = 0; i < json.length; i++) {
            const element = json[i];
            if (element.user == user){
                element.reservation = addedReservation    
                fs.writeFile("reservations.json", JSON.stringify(json), (err) =>{
                    if (err) throw err;
                });
                exists = true;
            }
        }
        if (!exists) {
            res.send("User doesnt exist")
        }
    });
});
// DELETE: Delete a reservation for a given user
app.delete("/deleteReservation/:user", (req, res) => {
    let user = req.params.user
    fs.readFile("reservations.json", (err, data) => {
        let json = JSON.parse(data);
        let exists = false;
        for (let i = 0; i < json.length; i++) {
            const element = json[i];
            if (element.user == user){
                element.reservation = null    
                fs.writeFile("reservations.json", JSON.stringify(json), (err) =>{
                    if (err) throw err;
                });
                exists = true;
            }
        }
        if (!exists) {
            res.send("User doesnt exist")
        }
    });
});

// Define a route with parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});