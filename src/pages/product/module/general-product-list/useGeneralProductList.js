import { useState } from "react";
import { useProductList } from "@/pages/product/hooks/useProductList";

function useGeneralProductList() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);

  //드롭다운
  const handleSortChange = (sort) => {
    if (sort === "최신순") {
      setOrderBy("recent");
    } else if (sort === "좋아요순") {
      setOrderBy("favorite");
    }
    setCurrentPage(1);
    //console.log("설정된 orderBy:", sort === "최신순" ? "recent" : "favorite");
  };

  // 받아온 대로 정렬하기
  const products = useProductList({
    page: currentPage,
    pageSize: 10,
    keyword: searchKeyword,
    orderBy: orderBy,
  });

  //페이지네이션
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log("products:", products);

  return {
    setSearchKeyword,
    handleSortChange,
    products: products?.list || [],
    totalCount: products?.totalCount || 0,
    loading: products?.loading || false,
    error: products?.error || null,
    currentPage,
    handlePageChange,
  };
}

export default useGeneralProductList;
