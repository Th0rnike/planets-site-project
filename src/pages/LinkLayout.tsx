import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import { theme } from "../theme";
import background from "../assets/background-stars.svg";
import Menu from "../components/Menu";
import planetData from "../data/data.json";
import { Link } from "react-router-dom";

const LinkLayout = () => {
  const [showMenu, setShowMenu] = useState(true);

  const openPlanetPage = () => {
    setShowMenu(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header>
          <Title>the planets</Title>
          <TabletList>
            {planetData.map((p, index) => {
              return (
                <div key={index}>
                  <Li>
                    <Links onClick={openPlanetPage} to={`${p.name}`}>
                      {p.name}
                    </Links>
                  </Li>
                </div>
              );
            })}
          </TabletList>
          <HamburgerMenu onClick={() => setShowMenu(!showMenu)}>
            <HR showMenu={showMenu} />
            <HR showMenu={showMenu} />
            <HR showMenu={showMenu} />
          </HamburgerMenu>
        </Header>
        <HorizontalRule />
        <Menu
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          openPlanetPage={openPlanetPage}
        />
      </>
    </ThemeProvider>
  );
};

interface showMenu {
  showMenu: boolean;
}

const Header = styled.header`
  background-color: ${({ theme }) => theme.styles.pallete.backgroundBlue};
  color: ${({ theme }) => theme.styles.pallete.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 0 24px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    padding: 32px 0 27px 0;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.styles.fonts.antonioFont};
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.0499999523162842px;
  text-align: left;

  @media screen and (min-width: 768px) {
    padding-bottom: 39px;
  }
`;

const TabletList = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 52px 0 51px;
    width: 100%;
  }
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media screen and (min-width: 768px) {
    font-size: 11px;
    letter-spacing: 1px;
  }
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

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export default LinkLayout;
