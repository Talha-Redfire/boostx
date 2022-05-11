import axios from "axios";

const FetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

export default FetchProducts;
