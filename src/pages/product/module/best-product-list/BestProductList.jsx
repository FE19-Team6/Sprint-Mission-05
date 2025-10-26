import ProductList from "@/pages/product/components/ProductList";
import { useProductList } from "@/pages/product/hooks/useProductList";

function BestProductList() {
  const data = useProductList({
    page: 1,
    pageSize: 4,
    orderBy: "favorite",
  });

  return (
    <ProductList
      products={data.list || []}
      // 이미지 개수
      columns={4} // 데스크톱
      columnsTablet={2} // 태블릿
      columnsMobile={1} // 모바일
      // 이미지 높이
      imageHeight={282} // 데스크톱
      imageHeightTablet={343} // 태블릿
      imageHeightMobile={343} // 모바일
    />
  );
}

export default BestProductList;
