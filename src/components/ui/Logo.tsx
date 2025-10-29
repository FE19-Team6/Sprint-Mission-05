import { styled } from "styled-components";
import { Link } from "react-router-dom";
import pandaLogo from "@/assets/image/pandaLogo.svg";

// 메인로고일땐 이렇게 해도 되는데 확장성을 생각하면 to, 이미지크기, 대체 텍스트는 prop으로 받는게 좋을거 같다 아니면 메인이랑 그런용도 로고를 하나 만들자
const Logo = () => {
  return (
    <LogoStyled to="/">
      <img src={pandaLogo} alt="판다마켓" />
    </LogoStyled>
  );
};

const LogoStyled = styled(Link)`
  display: inline-block;

  img {
    height: 40px;
    width: auto;
    display: block;
  }
`;

export default Logo;
