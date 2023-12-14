import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:Number,
        required:true,
    },
    propertyName:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});

const Booking = mongoose.models.Booking|| mongoose.model("Booking",bookingSchema);


export default  Booking;