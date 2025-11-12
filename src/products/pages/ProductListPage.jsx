import { useState } from "react";
import GeneralProductList from "@/products/modules/GeneralProductList";
import Pagination from "@/components/Pagination";
import ProductFilter from "@/products/components/ProductFilter";
import Input from "@/components/Input";
import Button from "@/components/Button";
import BestProductList from "@/products/modules/BestProductList";
import useResponsive from "@/products/hooks/useResponsive";

export default function ProductListPage() {
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);

  // 반응형 훅 사용
  const device = useResponsive();
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";

  return (
    <main className="p-4">
      {/* 인기상품 섹션 */}
      <div>
        <h1 className="text-2xl font-semibold">인기상품</h1>
        <BestProductList />
      </div>

      {/* 전체상품 섹션 */}
      {isMobile ? (
        <div className="flex flex-col items-center mt-20 gap-3">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">전체 상품</h1>
            <Button className="w-full h-[42px]">상품 등록하기</Button>
          </div>

          {/* 버튼 / 인풋 / 필터를 세로로 쌓기 */}
          <div className="flex items-center w-full gap-3 mt-4">
            <Input size="mobile" placeholder="검색할 상품을 입력해주세요" />
            <ProductFilter order={order} setOrder={setOrder} />
          </div>
        </div>
      ) : isTablet ? (
        // 태블릿 UI
        <div className="flex flex-col items-center mt-20 gap-3">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">전체 상품</h1>
            <Button className="w-[180px] h-[42px]">상품 등록하기</Button>
          </div>

          <div className="flex items-center w-full gap-3 mt-4">
            <Input size="pc" placeholder="검색할 상품을 입력해주세요" />
            <ProductFilter order={order} setOrder={setOrder} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between mt-20">
          <h1 className="text-2xl font-semibold">전체 상품</h1>

          <div className="flex items-center gap-3">
            <Input size="pc" placeholder="검색할 상품을 입력해주세요" />
            <Button>상품 등록하기</Button>
            <ProductFilter order={order} setOrder={setOrder} />
          </div>
        </div>
      )}

      {/* 전체 상품 리스트 */}
      <div className="mt-10">
        <GeneralProductList order={order} page={page} />
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-10">
        <Pagination page={page} setPage={setPage} />
      </div>
    </main>
  );
}
