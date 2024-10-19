import mongoose, { Schema } from "mongoose";
import { IUser } from "../inerfaces";


const userSchema: Schema = new Schema<IUser> ({
    name: {
        type: String
    },

    email: { 
        type: String
    },

    phone: {
        type: Number
    },
},
{
    timestamps: true
})

export const User = mongoose.model<IUser>('User', userSchema)