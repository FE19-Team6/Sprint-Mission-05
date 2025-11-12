import { useState } from "react";
import useResponsive from "@/products/hooks/useResponsive";

export default function ProductCard({
  size = "pc",
  name,
  price,
  favoriteCount,
  images,
}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(favoriteCount);

  const likeDefaultIcon = "/assets/like-default.svg";
  const likeActiveIcon = "/assets/like-active.svg";

  // 반응형 훅
  const device = useResponsive();
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";

  const likeHandler = () => {
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  // general 리스트는 반응형 무시 (고정)
  const imageSizeClass =
    size === "general"
      ? "w-[220px] h-[220px]" // 고정 크기
      : isMobile
      ? "w-[400px] h-[400px]" // 모바일 반응형
      : isTablet
      ? "w-[280px] h-[280px]" // 태블릿 반응형
      : "w-[280px] h-[280px]"; // PC 반응형

  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <img
        src={images}
        alt="상품 이미지"
        className={`rounded-[14px] object-cover ${imageSizeClass}`}
      />
      <div className="text-gray-900 text-left">
        <h2 className="truncate">{name}</h2>
        <h1 className="text-xl font-semibold">{price}</h1>
        <button
          onClick={likeHandler}
          className="flex items-center justify-center gap-2 mt-2"
        >
          <img
            src={liked ? likeActiveIcon : likeDefaultIcon}
            alt="좋아요 아이콘"
            className="w-[18px] h-[18px]"
          />
          <p>{count}</p>
        </button>
      </div>
    </div>
  );
}
