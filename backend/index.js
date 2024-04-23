import { PORT, mongoDBURL } from "./config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());


mongoose
.connect(mongoDBURL)
.then(() => {
    console.log(`App connected to database`)
    app.listen(PORT, () => {
        console.log(`Listening from port: ${PORT}`)
    })
})
.catch((error) => {

});