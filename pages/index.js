import React from 'react' 
import axios from 'axios' //import a CTP library to make able to get a request

{/*fetching products data within home page component*/ }
function Home(products) {
    console.log(products)

    {/*Allows to interact with the outside world making a request to an external API
    Execute get products function which will run after component mounts with the use effect hook*/}
   React.useEffect(() => {
        getProducts(); {/* Get products from the APi and display on the home page */}
    }, [])

    {/*requests to the products endpoint and the Json data that are returned on the response*/}
    async function getProducts() 
    {
       {/*variable to receive the url which we will make a resquest to*/}
        const url = "api/products";
        {/*get request, passingg a url as argument, await the request and directly put it within a response variable.*/}
        const response = await axios.get(url);
        console.log(response.data);
    }

    //Fetch data before the componet is displayed
Home.getInitialProps = async () =>{
    //fecth data on server
    const url = "api/products";
    const response = await axios.get(url);
    return { products: response.data};    

    //return response date as an object
    return { hello: 'world'}
    //this object will be merged with existing props
}

  return <>home</>;
}



export default Home;
