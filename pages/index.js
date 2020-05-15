import React from "react";
import axios from "axios"; //import a CTP library to make able to get a request
import ProductList from "../components/Index/ProductList";
import baseUrl from "../utils/baseUrl";


{/*fetching products data within home page component*/ }
function Home({ products }) {
  return <ProductList products={products} />;
}

//Fetch data before the componet is displayed
Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/products`;
  // fetch data on server
  const response = await axios.get(url);
  // return response data as an object
  return { products: response.data };
  // note: this object will be merged with existing props
};

export default Home;
