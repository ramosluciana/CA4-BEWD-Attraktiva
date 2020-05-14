import React from "react";
import {Form, Input, TextArea, Button, Image, Message, Header, Icon} 
from "semantic-ui-react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import catchErrors from "../utils/catchErrors";

const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: ""
};

//Allows to create + keep track of new product
    function CreateProduct() {
        const [product, setProduct] = React.useState(INITIAL_PRODUCT);
        const [mediaPreview, setMediaPreview] = React.useState("");
        const [success, setSuccess] = React.useState(false);  {/*create a state variable called Success which going to be set to true 
        only when the form is submitted successfully*/}
        const [loading, setLoading] = React.useState(false);
        const [disabled, setDisabled] = React.useState(true);
        const [error, setError] = React.useState("");

        //All itens in the form has to be filled in order o enable submit button
        React.useEffect(() => {
        const isProduct = Object.values(product).every(el => Boolean(el));
        isProduct ? setDisabled(false) : setDisabled(true);
    }, [product]);

    //Handle changes on the product form
    function handleChange(event) {
        const { name, value, files } = event.target;
        if (name === "media") {
        setProduct(prevState => ({ ...prevState, media: files[0] }));
        setMediaPreview(window.URL.createObjectURL(files[0])); //allow previewing image once choose
        } else {
        setProduct(prevState => ({ ...prevState, [name]: value }));
        }
    }

//handleimage upload + to collect the data needed to payload the post request made to the cloudinary API.
    async function handleImageUpload(){
        const data = new FormData() //form data construtor
        data.append("file", product.media);
        data.append("upload_preset", "attraktiva");
        data.append("cloud_name", "dwv21pssh");
        const response = await axios.post(process.env.CLOUDINARY_URL, data);
        const mediaUrl = response.data.url;
        return mediaUrl;
    }

//Handle form submit
    async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError("");
      const mediaUrl = await handleImageUpload();
      const url = `${baseUrl}/api/product`;
      const { name, price, description } = product;
      const payload = { name, price, description, mediaUrl };
      const response = await axios.post(url, payload);
      console.log({ response });
      setProduct(INITIAL_PRODUCT);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="green" />
        Create New Product
      </Header>
      <Form
        loading={loading}
        error={Boolean(error)}
        success={success}
        onSubmit={handleSubmit}
      >
        <Message error header="Oops!" content={error} />
        <Message
          success
          icon="check"
          header="Success!"
          content="Your product has been posted"
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="name"
            label="Name"
            placeholder="Name"
            value={product.name}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="price"
            label="Price"
            placeholder="Price"
            min="0.00"
            step="0.01"
            type="number"
            value={product.price}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="media"
            type="file"
            label="Media"
            accept="image/*"
            content="Select Image"
            onChange={handleChange}
          />
        </Form.Group>
        <Image src={mediaPreview} rounded centered size="small" />
        <Form.Field
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          onChange={handleChange}
          value={product.description}
        />
        <Form.Field
          control={Button}
          disabled={disabled || loading}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
        />
      </Form>
    </>
  );

}
export default CreateProduct;