import styled from "styled-components";

const ProductCardStyled = styled.li`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    display: block;
  }

  .product-info {
    padding: 12px;

    h3 {
      font-size: 1rem;
      margin-bottom: 8px;
    }

    p {
      margin: 4px 0;
    }
  }
`;

function ProductCard({ name, thumbnailUrl, price, favoriteCount }) {
  return (
    <ProductCardStyled>
      <img src={thumbnailUrl} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price}</p>
        <p>♥ {favoriteCount}</p>
      </div>
    </ProductCardStyled>
  );
}

export default ProductCard;
