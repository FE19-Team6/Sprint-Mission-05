import { useEffect, useState } from "react";
import getProducts from "@/api/product/productListApi";

export function useProductList() {
  const [products, setProducts] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const { productList } = await getProducts();
      console.log("받아온 데이터:", productList);
      setProducts(productList);
    };

    loadProducts();
  }, []);

  return products;
}
