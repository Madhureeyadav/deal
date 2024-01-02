import mongoose, { Schema } from "mongoose";

const contactNowSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    }
});
const ContactNow = mongoose.models.contactNow || mongoose.model("contactNow", contactNowSchema);
export default ContactNow;