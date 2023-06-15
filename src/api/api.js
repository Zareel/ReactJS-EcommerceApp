import axios from "axios";

export const productsData = async () => {
  const products = await axios.get("https://fakestoreapi.com/products");
  return products;
};
