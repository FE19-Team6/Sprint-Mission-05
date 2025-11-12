import { useState, useEffect, useMemo } from "react";
import { getMyProductApi } from "@/api/getMyProductApi";

// 외부에서 정렬 기준(order)과 페이지(page)를 인자로 받음
//
export default function useProductList({ order = "recent", page = 1 }) {
  // 상태 관리: 상품 목록, 에러, 로딩 상태
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // 상품 리스트 데이터를 가져오고 정렬 상태를 관리하는 커스텀 훅
  // API 요청 중 로딩 상태 관리
  useEffect(() => {
    async function getFetch() {
      try {
        const data = await getMyProductApi({ order, page });
        setProducts(data.list);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getFetch();
  }, [order, page]);

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    // 원본 배열 변경 방지를 위해 복사
    const sorted = [...products];

    // 최신순 정렬
    if (order === "recent") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    // 좋아요순 정렬
    if (order === "favorite") {
      sorted.sort((a, b) => b.favoriteCount - a.favoriteCount);
    }

    return sorted;
  }, [products, order]);

  // 정렬된 데이터, 에러, 로딩 상태 반환
  return {
    products: sortedProducts,
    error,
    loading,
  };
}
