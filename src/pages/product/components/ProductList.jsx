import styled from "styled-components";
import { device } from "@/styles/theme.styled";
import ProductCard from "@/pages/product/components/ProductCard";

const ProductListStyled = styled.ul`
  display: grid;
  gap: 20px;
  margin: 0 auto;
  max-width: 1200px;

  @media ${device.desktop} {
    grid-template-columns: repeat(${(props) => props.columns || 4}, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(${(props) => props.columnsTablet || 2}, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(${(props) => props.columnsMobile || 1}, 1fr);
  }
`;

function ProductList({ products, columns, columnsTablet, columnsMobile }) {
  return (
    <ProductListStyled
      columns={columns}
      columnsTablet={columnsTablet}
      columnsMobile={columnsMobile}
    >
      {products.map(({ id, name, images, price, favoriteCount }) => (
        <ProductCard
          key={id}
          thumbnailUrl={images}
          name={name}
          price={price}
          favoriteCount={favoriteCount}
        />
      ))}
    </ProductListStyled>
  );
}

export default ProductList;
