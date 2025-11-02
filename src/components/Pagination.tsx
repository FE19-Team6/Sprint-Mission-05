import React from "react";
import LeftArrow from "../assets/arrow_left.svg";
import RightArrow from "../assets/arrow_right.svg";

interface PaginationProps {
  totalPageNum: number;
  activePageNum: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  totalPageNum,
  activePageNum,
  onPageChange,
}: PaginationProps) {
  const maxVisiblePages = 5;
  let startPage: number;

  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div className="flex items-center justify-center gap-1">
      {/* ◀ 이전 버튼 */}
      <button
        className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full text-gray-500 font-semibold text-base disabled:opacity-50 disabled:cursor-default"
        disabled={activePageNum === 1}
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <img src={LeftArrow} alt="이전" className="w-4 h-4" />
      </button>

      {/* 페이지 번호 */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-base border border-gray-200 transition-colors
            ${
              activePageNum === page
                ? "bg-(--blue) text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}

      {/* ▶ 다음 버튼 */}
      <button
        className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full text-gray-500 font-semibold text-base disabled:opacity-50 disabled:cursor-default"
        disabled={activePageNum === totalPageNum}
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <img src={RightArrow} alt="다음" className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;
