import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: Image,
        }
    }
)

export const Item = mongoose.model("Cat", itemSchema)