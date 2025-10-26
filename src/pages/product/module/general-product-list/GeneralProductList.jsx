import ProductList from "@/pages/product/components/ProductList";
import Filter from "@/pages/product/module/filter/Filter";
import useGeneralProductList from "@/pages/product/module/general-product-list/useGeneralProductList";
import Pagination from "@/pages/product/module/pagination/Pagination";
function GeneralProductList() {
  const {
    setSearchKeyword,
    handleSortChange,
    products,
    currentPage,
    totalCount,
    handlePageChange,
  } = useGeneralProductList();

  return (
    <>
      <Filter
        onSearchChange={setSearchKeyword}
        onSortChange={handleSortChange}
      />
      <ProductList
        products={products}
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
        totalPages={Math.ceil(totalCount / 10)}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default GeneralProductList;
