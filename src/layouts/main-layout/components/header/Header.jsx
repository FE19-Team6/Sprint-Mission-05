import { Header as HeaderStyled, HeaderWrap } from "./Header.styled";

function Header({ children }) {
  return (
    <HeaderStyled>
      <HeaderWrap>{children}</HeaderWrap>
    </HeaderStyled>
  );
}

export default Header;
