{/*Products API end point */}

import Product from '../../models/Product';
import connectDb from "../../utils/connectDb";

connectDb(); //make sure to have a connection to the database before try to make a request

//Method to handle get/delete and sent it to the appropriate function
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

//Get request
async function handleGetRequest(req, res) {
  const { _id } = req.query; //get id from the requested data
  const product = await Product.findOne({ _id }); //Find product according to its ID
  res.status(200).json(product);
}

async function handlePostRequest(req, res) {
  const { name, price, description, mediaUrl } = req.body;
  //If any of the product value/fields is missing, the user will get a warning message, otherwise user can proceed to create new product
  if (!name || !price || !description || !mediaUrl) {
    return res.status(422).send("Product missing one or more fields");
  }
  const product = await new Product({
    name,
    price,
    description,
    mediaUrl
  }).save(); //allow to save to db
  res.status(201).json(product);
}

//Delete request
async function handleDeleteRequest(req, res) {
  const { _id } = req.query; 
  await Product.findOneAndDelete({ _id });
  res.status(204).json({});
}

