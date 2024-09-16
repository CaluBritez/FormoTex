import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code_product: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: true,
    },
    starting_date: {
        type: Date,
        required: true,
    },
    store: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

export const Product = model('Producto', ProductSchema);