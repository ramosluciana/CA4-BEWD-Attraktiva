import axios from 'axios'

function Product({ product }) {
  console.log({ product });
  return <>product</>;
}

//Fetch produc data to the server
Product.getInitialProps = async ({ query : { _id } }) => {
    {/* Make a request to a new endpoint that will allow to get the product from the
    products collection based on its I.D. */}
    const url = 'http://localhost:3000/api/product';
    const payload = { params: { _id} };
    const response = await axios.get(url, payload);
    return {product: response.data}
}
export default Product;
