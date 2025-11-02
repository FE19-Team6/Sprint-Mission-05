import styled from "styled-components";

type ProductCardProps = {
  name: string;
  images: string[];
  price: number;
  favoriteCount: number;
  height?: number | undefined;
  heightTablet?: number | undefined;
  heightMobile?: number | undefined;
};

interface StyledProps {
  $height?: number;
  $heightTablet?: number;
  $heightMobile?: number;
}

const ProductCard = ({
  name,
  images,
  price,
  favoriteCount,
  height,
  heightTablet,
  heightMobile,
}: ProductCardProps) => {
  const thumbnailUrl = images?.[0] ?? "";

  return (
    //undefined일때 prop 안보내기
    <ProductCardStyled
      {...(height !== undefined ? { $height: height } : {})}
      {...(heightTablet !== undefined ? { $heightTablet: heightTablet } : {})}
      {...(heightMobile !== undefined ? { $heightMobile: heightMobile } : {})}
    >
      <img src={thumbnailUrl} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price.toLocaleString()}원</p>
        <p>♥ {favoriteCount}</p>
      </div>
    </ProductCardStyled>
  );
};

// ----- styles -----

const ProductCardStyled = styled.li<StyledProps>`
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

export default ProductCard;
