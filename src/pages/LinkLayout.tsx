import { Link, Outlet } from "react-router-dom";
import planetData from "../data/data.json";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import arrowIcon from "../assets/icon-chevron.svg";
import { theme, planetColors } from "../theme";

const LinkLayout = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showPlanet, setShowPlanet] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header>
          <Title>the planets</Title>
          <HamburgerMenu onClick={() => setShowMenu(!showMenu)}>
            <HR showMenu={showMenu} />
            <HR showMenu={showMenu} />
            <HR showMenu={showMenu} />
          </HamburgerMenu>
        </Header>
        <HorizontalRule />
        {showMenu && (
          <MobileList>
            {planetData.map((p, index) => {
              const circleColor = planetColors[p.name];
              return (
                <div key={index}>
                  <Li>
                    <Chapter>
                      <Circle style={{ backgroundColor: circleColor }}></Circle>
                      <Links
                        onClick={() => setShowPlanet(true)}
                        to={`${p.name}`}
                      >
                        {p.name}
                      </Links>
                    </Chapter>
                    <div>
                      <Arrow src={arrowIcon} />
                    </div>
                  </Li>
                  {index < 7 ? <HorizontalRule /> : ""}
                </div>
              );
            })}
          </MobileList>
        )}
        {(!showMenu || showPlanet) && <Outlet />}
      </>
    </ThemeProvider>
  );
};

interface showMenu {
  showMenu: boolean;
}

const Header = styled.div`
  background-color: ${({ theme }) => theme.styles.pallete.backgroundBlue};
  color: ${({ theme }) => theme.styles.pallete.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 0 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.styles.fonts.antonioFont};
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.0499999523162842px;
  text-align: left;
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 24px;
  gap: 4px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const HR = styled.hr<showMenu>`
  height: 4px;
  border: none;
  background-color: ${(props) => (props.showMenu ? "gray" : "white")};
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: white;
  opacity: 0.2;
  margin: 20px 0;
`;

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 67px 24px;
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
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
`;

export default LinkLayout;
