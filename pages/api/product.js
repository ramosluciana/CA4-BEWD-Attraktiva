{/*Products API end point */}

import Product from '../../models/Product'

//Method to handle get/delete and sent it to the appropriate function
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
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

//Delete request
async function handleDeleteRequest(req, res) {
  const { _id } = req.query; 
  await Product.findOneAndDelete({ _id });
  res.status(204).json({});
}

