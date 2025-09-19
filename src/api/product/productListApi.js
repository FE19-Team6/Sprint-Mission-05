import axiosApi from "../axios";

const getProducts = async () => {
  const res = await axiosApi.get("/products");
  const { list } = res.data;

  return {
    productList: list,
  };
};

export default getProducts;
