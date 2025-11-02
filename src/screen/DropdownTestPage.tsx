import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { getProducts, type Product } from "../api/Api";

export default function DropdownTestPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortType, setSortType] = useState<"recent" | "favorite">("recent");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ✅ 상품 목록 불러오기
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts({
          sort: sortType === "recent" ? "latest" : "popular",
          limit: 6,
        });
        setProducts(data);
      } catch (error) {
        console.error("상품 불러오기 실패:", error);
      }
    }
    fetchData();
  }, [sortType]);

  // ✅ 드롭다운 선택 시
  const handleSortSelection = (type: "recent" | "favorite") => {
    setSortType(type);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* 헤더 영역 */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="px-6 py-3 rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-100"
        >
          정렬 기준: {sortType === "recent" ? "최신순" : "인기순"}
        </button>
        {isDropdownOpen && <Dropdown onSortSelection={handleSortSelection} />}
      </div>

      {/* 상품 목록 */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg truncate">{item.name}</h2>
              <p className="text-blue-500 font-bold mt-2">
                ₩{item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 로드 결과 없음 처리 */}
      {products.length === 0 && (
        <p className="text-gray-500 mt-12">불러올 상품이 없습니다.</p>
      )}
    </div>
  );
}
