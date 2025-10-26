import axiosApi from "../axios";

const getProducts = async ({
  page = 1,
  pageSize = "10",
  orderBy = "recent",
  keyword = "",
}) => {
  const query = `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
    keyword ? `&keyword=${keyword}` : ""
  }`;
  const res = await axiosApi.get(query);
  const { list, totalCount } = res.data;

  return {
    productList: list,
    totalCount: totalCount,
  };
};

export default getProducts;
