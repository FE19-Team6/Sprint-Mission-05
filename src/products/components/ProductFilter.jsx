import { useState } from "react";
import useResponsive from "@/products/hooks/useResponsive";

// "최신순" / "좋아요순" 두 가지 옵션 제공
export default function ProductFilter({ order, setOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  // 반응형 커스텀 훅
  const device = useResponsive();
  const isMobile = device === "mobile";

  const closeArrowIcon = "/assets/btm-arrow.svg";
  const openArrowIcon = "/assets/top-arrow.svg";
  const sortIcon = "/assets/sort.svg";

  // 드롭다운 열고 닫기
  const arrowHandler = () => setIsOpen((prev) => !prev);

  // 현재 정렬 상태 라벨
  const orderLabel = order === "favorite" ? "좋아요순" : "최신순";

  return (
    <div className="relative">
      {/* 필터 버튼 영역 */}
      <div className="w-[130px]">
        <button
          onClick={arrowHandler}
          className="flex items-center justify-between w-full px-4 w-[40px] h-[40px] rounded-[8px] border border-gray-200"
        >
          {/* 모바일은 아이콘, 데스크탑은 텍스트 */}
          {isMobile ? (
            <img src={sortIcon} alt="정렬" className="w-[26px] h-[26px]" />
          ) : (
            <span className="text-gray-800 font-medium">{orderLabel}</span>
          )}

          {/* 화살표 아이콘 (열림/닫힘 상태에 따라 변경) */}
          <img
            src={isOpen ? openArrowIcon : closeArrowIcon}
            alt="토글 화살표"
            className="w-[24px] h-[24px]"
          />
        </button>
      </div>

      {/* 드롭다운 메뉴 (열림 상태일 때만 렌더링) */}
      {isOpen && (
        <div className="absolute top-[50px] flex flex-col w-[130px] bg-white rounded-[8px] border border-gray-200 overflow-hidden">
          {/* 최신순 선택 */}
          <button
            onClick={() => {
              setOrder("recent");
              setIsOpen(false);
            }}
            className="flex items-center justify-center gap-2 h-[40px] hover:bg-gray-100"
          >
            최신순
          </button>

          {/* 좋아요순 선택 */}
          <button
            onClick={() => {
              setOrder("favorite");
              setIsOpen(false);
            }}
            className="flex items-center justify-center gap-2 h-[40px] hover:bg-gray-100"
          >
            좋아요순
          </button>
        </div>
      )}
    </div>
  );
}
