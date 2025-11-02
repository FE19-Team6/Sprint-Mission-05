import { useState } from "react";

function Pagination() {
  // 페이지 번호 배열 (1~5 페이지까지)
  const pages = [1, 2, 3, 4, 5];

  const [currentPages, setCurrentPages] = useState(1);

  // 특정 페이지를 클릭했을 때 실행되는 함수
  const activeHandler = (page) => {
    setCurrentPages(page);
  };

  // "이전" 버튼 클릭 시 실행 (1페이지보다 크면 -1)
  const goPrevHandler = () => {
    if (currentPages > 1) {
      setCurrentPages(currentPages - 1);
    }
  };

  // "다음" 버튼 클릭 시 실행 (마지막 페이지보다 작으면 +1)
  const goNextHandler = () => {
    if (currentPages < pages.length) {
      setCurrentPages(currentPages + 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={goPrevHandler}
        disabled={currentPages === 1}
        className={`w-[40px] h-[40px]   
            border border-gray-200
            rounded-full
            text-lg
            text-gray-700
            font-semibold
            flex items-center justify-center
            cursor-pointer
            ${currentPages === 1 ? `opacity-40` : ""}
            `}
      >
        {/* 왼쪽 화살표 아이콘 */}
        <img
          src="/assets/left-arrow.svg"
          className="w-[28px] h-[28px]
          "
        />
      </button>

      {/* 페이지 번호 리스트 */}
      {pages.map((page) => {
        return (
          <div
            key={page}
            onClick={() => activeHandler(page)}
            className={`w-[40px] h-[40px]
            border border-gray-200
            rounded-full
            text-lg
            text-gray-700
            font-semibold
            flex items-center justify-center
            cursor-pointer
            ${
              currentPages === page
                ? `bg-primary-700 text-white border-none`
                : `bg-white`
            }
            `}
          >
            {page}
          </div>
        );
      })}

      {/* 다음 버튼 */}
      <button
        onClick={goNextHandler}
        disabled={currentPages === 5}
        className={`w-[40px] h-[40px]
            border border-gray-200
            rounded-full
            text-lg
            text-gray-700
            font-semibold
            flex items-center justify-center
            cursor-pointer
            
            ${currentPages === 5 ? `opacity-40` : ""}
            `}
      >
        {/* 오른쪽 화살표 아이콘 */}
        <img
          src="/assets/right-arrow.svg"
          className="w-[28px] h-[28px]
          "
        ></img>
      </button>
    </div>
  );
}

export default Pagination;
