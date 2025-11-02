import ProductList from "@/pages/product/components/ProductList";
import Filter from "@/pages/product/module/filter/Filter";
import useGeneralProductList from "@/pages/product/module/general-product-list/useGeneralProductList";
import Pagination from "@/pages/product/module/pagination/Pagination";

const GeneralProductList = () => {
  const {
    setSearchKeyword,
    handleSortChange,
    products = [],
    currentPage,
    totalCount = 0,
    loading,
    error,
    handlePageChange,
  } = useGeneralProductList();

  const PAGE_SIZE = 10;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  console.log("🔍 디버깅:", {
    totalCount,
    PAGE_SIZE,
    totalPages,
    currentPage,
    products: products.length,
  });

  return (
    <>
      <Filter
        onSearchChange={setSearchKeyword}
        onSortChange={handleSortChange}
      />
      <ProductList
        products={products}
        loading={loading}
        error={error}
        // 이미지 개수
        columns={5} //데스크톱
        columnsTablet={3} //태블릿
        columnsMobile={2} //모바일
        //이미지 높이
        imageHeight={221} // 데스크톱
        imageHeightTablet={221} // 태블릿
        imageHeightMobile={168} // 모바일
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default GeneralProductList;
