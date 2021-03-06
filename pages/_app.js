import App from "next/app";
import Layout from "../components/_App/Layout";

class MyApp extends App {
   static async getInitialProps({ Component, ctx }){
       let pageProps = {};

       //check given page if component has a get an initial props property, then execute it.
        if (Component.getInitialProps){
           pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    );
  }
}

export default MyApp;