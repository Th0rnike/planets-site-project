import { Link, Outlet } from "react-router-dom";
import planetData from "../data/data.json";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { DefaultColors } from "../components/DefaultColors";
import { useState } from "react";

const LinkLayout = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { colors, fonts } = DefaultColors;

  return (
    <>
      <GlobalStyles
        fontFamily={fonts.spartanFont}
        backgroundColor={colors.backgroundBlue}
      />
      <Header backgroundColor={colors.backgroundBlue} textColor={colors.white}>
        <Title antonioFont={fonts.antonioFont}>the planets</Title>
        <HamurgerMenu onClick={() => setShowMenu(!showMenu)}>
          <HR showMenu={showMenu} />
          <HR showMenu={showMenu} />
          <HR showMenu={showMenu} />
        </HamurgerMenu>
      </Header>
      <HorizontalRule />
      {showMenu ? (
        <MobileList>
          {planetData.map((p, index) => (
            <>
              <Li key={index}>
                <Links to={`${p.name}`}>{p.name}</Links>
              </Li>
              <hr />
            </>
          ))}
        </MobileList>
      ) : (
        ""
      )}
      {showMenu ? "" : <Outlet />}
    </>
  );
};

interface HeaderProps {
  backgroundColor: string;
  textColor: string;
}

interface TitleProps {
  antonioFont: string;
}

interface HamburgerMenuProps {
  showMenu: boolean;
}

const Header = styled.div<HeaderProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 17px 24px;
`;

const Title = styled.h1<TitleProps>`
  font-size: 28px;
  text-transform: uppercase;
  font-family: ${(props) => props.antonioFont};
  font-weight: 400;
`;

const HamurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  gap: 4px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const HR = styled.hr<HamburgerMenuProps>`
  height: 3px;
  background: ${(props) => (props.showMenu ? "gray" : "white")};
  border: none;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: white;
  opacity: 0.2;
`;

const Ul = styled.ul`
  display: none;
  display: flex;
  gap: 33px;
`;

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 44px 24px 67px;
`;

const Li = styled.li`
  list-style: none;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
`;

export default LinkLayout;
