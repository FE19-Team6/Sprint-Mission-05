import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../../api/Api";
import type { Product } from "../../api/Api";
import ProductCard from "./ProductCard";
import searchIcon from "../../assets/ic_search.svg";
import { Link } from "react-router-dom";
import DropdownList from "../../components/Dropdown";
import PaginationBar from "../../components/Pagination";

const getVisibleCount = () => {
  const width = window.innerWidth;
  if (width < 768) return 4;
  if (width < 1280) return 6;
  return 10;
};

const AllProduct = () => {
  const [orderBy, setOrderBy] = useState<"recent" | "favorite">("recent");
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [itemList, setItemList] = useState<Product[]>([]);
  const [totalPageNum, setTotalPageNum] = useState(1);

  const pageSize = 10;

  const fetchProducts = useCallback(async () => {
    try {
      const { list, totalCount } = await getProducts({
        page,
        pageSize,
        orderBy,
      });

      const sortedList =
        orderBy === "favorite"
          ? [...list].sort(
              (a, b) => (b.favoriteCount ?? 0) - (a.favoriteCount ?? 0)
            )
          : list;

      setItemList(sortedList);
      setTotalPageNum(Math.ceil(totalCount / pageSize));
    } catch (error) {
      console.error("❌ Failed to fetch products:", error);
    }
  }, [page, pageSize, orderBy]);

  const handleSortSelection = (sortOption: string) => {
    setOrderBy(sortOption === "인기순" ? "favorite" : "recent");
    setPage(1);
  };

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className="px-6 py-10">
      {/*  Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">전체 상품</h1>
      </div>

      {/* 검색 + 정렬 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* 검색창 */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 w-full md:max-w-md bg-gray-50 h-12">
          <img src={searchIcon} alt="검색" className="w-5 h-5" />
          <input
            className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-gray-50"
            placeholder="검색할 상품을 입력해 주세요"
          />
        </div>

        {/* 정렬 + 등록 버튼 */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <Link
            to="/additem"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            상품 등록하기
          </Link>
          <DropdownList
            options={["최신순", "인기순"]}
            onSelect={handleSortSelection}
          />
        </div>
      </div>

      {/* 상품 목록 (반응형 표시 개수) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {itemList.length > 0 ? (
          itemList
            .slice(0, visibleCount)
            .map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            상품이 없습니다.
          </p>
        )}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center">
        <PaginationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={setPage}
        />
      </div>
    </section>
  );
};

export default AllProduct;
