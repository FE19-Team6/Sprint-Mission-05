import { useEffect, useState } from "react";
import getProducts from "@/api/product/productListApi";
import type { Product, OrderBy } from "@/type/product";

interface UseProductListParams {
  page?: number;
  pageSize?: number;
  orderBy?: OrderBy;
  keyword?: string;
}

export const useProductList = ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}: UseProductListParams = {}) => {
  const [products, setProducts] = useState<{list: Product[]; totalCount: number}>({ list: [], totalCount: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const { list, totalCount } = await getProducts({
          page,
          pageSize,
          orderBy,
          keyword,
        });
        setProducts({ list, totalCount });
      } catch (e) {
         // 인터셉터가 Error로 던지므로 그대로 저장
        setError(e as Error);
        setProducts({list: [], totalCount: 0})
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page, pageSize, orderBy, keyword]);

  return { ...products, loading, error };
}

// UseProductListParams -> UseProductListParams = {}로 수정한이유
// 인자를 전달하지 않고도 호출가능, 빈객체를 구조분해 하게 되어서 가능한거다