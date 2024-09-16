import { Schema, model } from "mongoose";

const RolSchema = new Schema({
    rol: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

export const Rol = model('Rol', RolSchema);