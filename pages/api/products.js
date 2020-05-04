//import products from "../../static/products.json";
import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb();
//Creating a route, passing request and response objects as parameters
export default async (req, res) => {
  //get product collections
  const products = await Product.find();
  res.status(200).json(products);
};
