import { useState } from "react";

function Input() {
  const [query, setQuery] = useState("");

  // 입력값에서 공백을 제거한 문자열 (빈칸만 입력 시 false로 처리됨)
  const normalized = query.trim();

  // 아이콘 이미지 경로
  const searchImg = "/assets/search.svg";
  const deleteImg = "/assets/delete.svg";

  // 삭제버튼 : 클릭 시 입력값 초기화
  const deleteHandler = () => {
    setQuery("");
  };

  return (
    // 인풋 전체 영역
    <div className="relative w-[325px]">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색할 상품을 입력해주세요."
        className="
          w-full h-[42px]
          bg-gray-100
          px-10
          text-lg text-gray-600
          rounded-lg
          outline-none
          border border-transparent
          focus:border-primary-700
          "
      />

      {/* 돋보기 아이콘 : 왼쪽 고정 위치 */}
      <img
        src={searchImg}
        className="absolute w-[24px] h-[24px] left-3 top-1/2 -translate-y-1/2"
      ></img>

      {/* 입력값이 있을 때만 삭제버튼 표시됨 */}
      {normalized && (
        <img
          onClick={deleteHandler}
          src={deleteImg}
          className="
          absolute 
          w-[16px] h-[16px] 
          right-3 top-1/2 -translate-y-1/2 
          hover:opacity-100
          opacity-60 
          cursor-pointer 
          "
        ></img>
      )}
    </div>
  );
}

export default Input;
