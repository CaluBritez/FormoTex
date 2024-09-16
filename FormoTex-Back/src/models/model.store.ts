import { Schema, model } from "mongoose";

const StoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

export const Store = model('Almacen', StoreSchema);