import { Input } from "semantic-ui-react";

//Create a function to allow the user to add a product to cart, require minimum 1 product to be added
function AddProductToCart() {
  return (
    <Input
      type="number"
      min="1"
      placeholder="Quantity"
      value={1}
      action={{
        color: "blue",
        content: "Add to Cart",
        icon: "plus cart"
      }}
    />
  );
}

export default AddProductToCart;

