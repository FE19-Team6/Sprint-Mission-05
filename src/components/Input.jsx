import { useState } from "react";
import useResponsive from "@/products/hooks/useResponsive";

export default function Input() {
  const [query, setQuery] = useState("");
  const searchIcon = "/assets/search.svg";
  const deleteIcon = "/assets/delete.svg";

  // 반응형 훅
  const device = useResponsive();
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";

  const deleteHandler = () => setQuery("");

  return (
    <div
      className={`flex items-center  relative ${
        isMobile
          ? "w-full h-[42px]"
          : isTablet
          ? "w-full h-[42px]"
          : "w-[260px] h-[42px]"
      }`}
    >
      <img
        src={searchIcon}
        alt="돋보기 아이콘"
        className="absolute left-3 w-[22px] h-[22px]"
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색할 상품을 입력해주세요"
        className="bg-gray-100 rounded-[8px] px-10 w-full h-full focus:outline-none"
        aria-label="상품 검색 입력창"
      />

      {query && (
        <button
          onClick={deleteHandler}
          className="absolute right-3 cursor-pointer"
          aria-label="입력 내용 삭제"
        >
          <img
            src={deleteIcon}
            alt="삭제 아이콘"
            className="w-[14px] h-[14px]"
          />
        </button>
      )}
    </div>
  );
}
