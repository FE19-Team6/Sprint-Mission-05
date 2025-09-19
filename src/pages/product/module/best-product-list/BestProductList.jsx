import { useProductList } from "@/pages/product/hooks/useProductList";
import ProductList from "@/pages/product/components/ProductList";

// 추후 베스트로 바꾸기
function BestProductList() {
  const products = useProductList();
  return (
    <ProductList
      products={products}
      columns={4}
      columnsTablet={2}
      columnsMobile={1}
    />
  );
}

export default BestProductList;
