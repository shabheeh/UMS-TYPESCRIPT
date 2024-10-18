import mongoose, { Schema, Document} from "mongoose";

export interface UserInterface extends Document {
    name: string;
    email: string;
    phone: number;
}

const userSchema: Schema = new mongoose.Schema({
    name: {
        type: String
    },

    email: { 
        type: String
    },

    phone: {
        type: Number
    },
})

export const User = mongoose.model<UserInterface>('User', userSchema)