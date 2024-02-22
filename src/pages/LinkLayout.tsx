import { Link, Outlet } from "react-router-dom";
import planetData from "../data/data.json";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { DefaultColors } from "../components/DefaultColors";
import { useState } from "react";
import arrowIcon from "../assets/icon-chevron.svg";

const LinkLayout = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { colors, fonts, planetIcons } = DefaultColors;

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
          {planetData.map((p, index) => {
            let circleColor;
            if (p.name === "Mercury") {
              circleColor = planetIcons.mercuryIcon;
            } else if (p.name === "Venus") {
              circleColor = planetIcons.venusIcon;
            } else if (p.name === "Earth") {
              circleColor = planetIcons.earthIcon;
            } else if (p.name === "Mars") {
              circleColor = planetIcons.marsIcon;
            } else if (p.name === "Jupiter") {
              circleColor = planetIcons.jupiterIcon;
            } else if (p.name === "Saturn") {
              circleColor = planetIcons.saturnIcon;
            } else if (p.name === "Uranus") {
              circleColor = planetIcons.uranusIcon;
            } else if (p.name === "Neptune") {
              circleColor = planetIcons.naptuneIcon;
            }
            return (
              <>
                <Li key={index}>
                  <Chapter>
                    <Circle style={{ backgroundColor: circleColor }}></Circle>
                    <Links to={`${p.name}`}>{p.name}</Links>
                  </Chapter>
                  <div>
                    <Arrow src={arrowIcon} />
                  </div>
                </Li>
                {index < 7 ? <HorizontalRule /> : ""}
              </>
            );
          })}
        </MobileList>
      ) : (
        ""
      )}
      {!showMenu && <Outlet />}
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
  height: 4px;
  background: ${(props) => (props.showMenu ? "gray" : "white")};
  border: none;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: white;
  opacity: 0.2;
  margin: 20px 0;
`;

const Ul = styled.ul`
  display: none;
  display: flex;
  gap: 33px;
`;

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 44px 24px 67px 24px;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Chapter = styled.div`
  display: flex;
  gap: 25px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;

const Arrow = styled.img`
  width: 6px;
  height: 8px;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1.36px;
`;

export default LinkLayout;
