import { useEffect, useState } from "react";
import getProducts from "@/api/product/productListApi";

export function useProductList({
  page = 1,
  pageSize = "10",
  orderBy = "recent",
  keyword = "",
}) {
  const [products, setProducts] = useState({ list: [], totalCount: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const { productList, totalCount } = await getProducts({
          page,
          pageSize,
          orderBy,
          keyword,
        });

        setProducts({ list: productList, totalCount });
      } catch (error) {
        console.error("상품 데이터 로드 실패:", error);
        setError(error.message || "데이터를 불러오는데 실패했습니다.");
        setProducts({ list: [], totalCount: 0 });
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page, pageSize, orderBy, keyword]);

  return { ...products, loading, error };
}
