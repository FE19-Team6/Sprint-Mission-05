import styled from "styled-components";
import { Link } from "react-router-dom";
import pandaLogo from "@/assets/image/pandaLogo.svg";

const LogoStyled = styled(Link)`
  display: inline-block;

  img {
    height: 40px;
    width: auto;
    display: block;
  }
`;

function Logo() {
  return (
    <LogoStyled to="/">
      <img src={pandaLogo} alt="판다마켓" />
    </LogoStyled>
  );
}

export default Logo;
