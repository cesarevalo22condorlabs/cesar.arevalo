import {Schema, model} from "mongoose";
import schema from "../schema";

const userSchema = new Schema({
    firstname: {
        type: String,
        required:true
    },
    lastname:String,
    age: Number
})

export default model('User',userSchema)