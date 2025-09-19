import styled from "styled-components";

const MainMenuStyled = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li {
    padding: 21px 15px;
  }
`;

function MainMenu() {
  return (
    <MainMenuStyled aria-label="메인 메뉴">
      <ul>
        <li>자유게시판</li>
        <li>중고마켓</li>
      </ul>
    </MainMenuStyled>
  );
}

export default MainMenu;
