import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name:{
        type:String,
        required:[true,"Nmae is required"],
        required:true,
       
    },
    email:{
        type:String,
        required:[true,"Email is required"],
       
    },
    number:{
        type:Number,
        required:[true,"number is required"],
        match:[10,"10 digit only"],
    },
    message:{
        type:String,
        required:[true,"message is required"],
    },
});
const Contact = mongoose.models.Contact|| mongoose.model("Contact",contactSchema);


export default  Contact;