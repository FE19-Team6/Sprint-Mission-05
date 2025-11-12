export default function Pagination({ page, setPage }) {
  const totalPages = 5; // 전체 페이지 수

  const prevIcon = "/assets/left-arrow.svg";
  const nextIcon = "/assets/right-arrow.svg";

  // 이전 버튼
  const goPrevHandler = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // 다음 버튼
  const goNextHandler = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  // 페이지 번호 클릭
  const handlePageClick = (num) => {
    setPage(num);
  };

  // 페이지 번호 배열
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-3">
      {/* 이전 버튼 */}
      <button
        onClick={goPrevHandler}
        className="flex items-center justify-center 
          w-[40px] h-[40px] border border-gray-200 
          rounded-full cursor-pointer"
        disabled={page === 1}
      >
        <img
          src={prevIcon}
          alt="이전"
          className={`w-[24px] h-[24px] ${page === 1 ? "opacity-50" : ""}`}
        />
      </button>

      {/* 페이지 번호 */}
      {pages.map((num) => (
        <div
          key={num}
          onClick={() => handlePageClick(num)}
          className={`flex items-center justify-center 
            w-[40px] h-[40px] rounded-full cursor-pointer
            ${
              page === num
                ? "bg-primary-700 text-white font-semibold"
                : "border border-gray-200 hover:bg-gray-100"
            }`}
        >
          {num}
        </div>
      ))}

      {/* 다음 버튼 */}
      <button
        onClick={goNextHandler}
        className="flex items-center justify-center 
          w-[40px] h-[40px] border border-gray-200 
          rounded-full cursor-pointer"
        disabled={page === totalPages}
      >
        <img
          src={nextIcon}
          alt="다음"
          className={`w-[24px] h-[24px] ${
            page === totalPages ? "opacity-50" : ""
          }`}
        />
      </button>
    </div>
  );
}
