import BestProductList from "../module/best-product-list/BestProductList";
import GeneralProductList from "../module/general-product-list/GeneralProductList";
import Pagination from "../module/pagination/Pagination";
import styled from "styled-components";

const ProductListPageStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0 58px 0;
  background: pink;
`;

const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    margin-bottom: 16px;
    color: var(--Secondary-900, #111827);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`;

// 전체 상품 = productList
function ProductListPage() {
  return (
    <ProductListPageStyled>
      <Section>
        <h2>베스트 상품</h2>
        <BestProductList />
      </Section>
      <Section>
        <h2>전체 상품</h2>
        <GeneralProductList />
      </Section>
      <Pagination />
    </ProductListPageStyled>
  );
}

export default ProductListPage;
