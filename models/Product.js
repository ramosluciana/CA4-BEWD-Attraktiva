import mongoose from "mongoose";
import shortid from "shortid"; // package to be used to generate unique ID

const { String, Number } = mongoose.Schema.Types;

//Modelling product data
const ProductSchema = new mongoose.Schema({
    //including multiple properties/conditions
    name: {
        type: String,
        required: true //Make sure product name is provided in order to add a new one
    },

    price: {
        type: Number,
        required: true //Make sure price is provided
    },

    sku: {
        type: String,
        unique: true, //Value has to be unique, no other produc can receive the same value
        default: shortid.generate() //Use to generate ID
    },
    
    description: {
        type: String,
        required: true,
    },
    mediaUrl: {
        type: String,
        required: true,
    },

})

//check if models exists. If it exists then we will use it otherwise we want to create it
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
