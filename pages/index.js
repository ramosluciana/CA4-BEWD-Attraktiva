import React from 'react' 
import axios from 'axios' //import a CTP library to make able to get a request
import ProductList from '../components/Index/ProductList'
import baseUrl from "../utils/baseUrl";

{/*fetching products data within home page component*/ }
function Home({ products }) {
  return <ProductList products={products} />;
}

    //Fetch data before the componet is displayed
Home.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/products`;;
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

 export default Home;


