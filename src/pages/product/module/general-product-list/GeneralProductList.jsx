import ProductList from "@/pages/product/components/ProductList";
import { useProductList } from "@/pages/product/hooks/useProductList";

function GeneralProductList() {
  const products = useProductList();
  return (
    <ProductList
      products={products}
      columns={5}
      columnsTablet={3}
      columnsMobile={2}
    />
  );
}

export default GeneralProductList;
