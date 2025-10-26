import styled from "styled-components";

const ProductCardStyled = styled.li`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    display: block;

    // 데스크톱
    @media ${({ theme }) => theme.device.desktop} {
      height: ${(props) => (props.$height ? `${props.$height}px` : "auto")};
    }

    // 태블릿
    @media ${({ theme }) => theme.device.tablet} {
      height: ${(props) =>
        props.$heightTablet
          ? `${props.$heightTablet}px`
          : props.$height
          ? `${props.$height}px`
          : "auto"};
    }

    // 모바일
    @media ${({ theme }) => theme.device.mobile} {
      height: ${(props) =>
        props.$heightMobile
          ? `${props.$heightMobile}px`
          : props.$heightTablet
          ? `${props.$heightTablet}px`
          : props.$height
          ? `${props.$height}px`
          : "auto"};
    }
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

function ProductCard({
  name,
  thumbnailUrl,
  price,
  favoriteCount,
  height,
  heightTablet,
  heightMobile,
}) {
  return (
    <ProductCardStyled
      $height={height}
      $heightTablet={heightTablet}
      $heightMobile={heightMobile}
    >
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
