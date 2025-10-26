import styled from "styled-components";
import ProductCard from "@/pages/product/components/ProductCard";

const ProductListStyled = styled.ul`
  display: grid;
  gap: 20px;
  margin: 0 auto;
  max-width: 1200px;

  @media ${({ theme }) => theme.device.desktop} {
    grid-template-columns: repeat(${(props) => props.$columns || 4}, 1fr);
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(${(props) => props.$columnsTablet || 2}, 1fr);
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(${(props) => props.$columnsMobile || 1}, 1fr);
  }
`;

function ProductList({
  products,
  columns,
  columnsTablet,
  columnsMobile,
  imageHeight,
  imageHeightTablet,
  imageHeightMobile,
  loading,
  error,
}) {
  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러: {error}</div>;
  }

  if (!products || !Array.isArray(products) || products.length === 0) {
    return <div>상품이 없습니다.</div>;
  }
  return (
    <ProductListStyled
      $columns={columns}
      $columnsTablet={columnsTablet}
      $columnsMobile={columnsMobile}
    >
      {products.map(({ id, name, images, price, favoriteCount }) => (
        <ProductCard
          key={id}
          thumbnailUrl={images}
          name={name}
          price={price}
          favoriteCount={favoriteCount}
          height={imageHeight}
          heightTablet={imageHeightTablet}
          heightMobile={imageHeightMobile}
        />
      ))}
    </ProductListStyled>
  );
}

export default ProductList;
