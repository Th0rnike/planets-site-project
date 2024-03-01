import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import { theme } from "../theme";
import background from "../assets/background-stars.svg";
import Menu from "../components/Menu";
import planetData from "../data/data.json";
import { Link } from "react-router-dom";
import iconHamburger from "../assets/icon-hamburger.svg";

const LinkLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

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
                <Li key={index}>
                  <TopLine
                    mycolor={
                      hoveredPlanet === p.name && p.name === "Mercury"
                        ? theme.styles.pallete.moonstone
                        : "transparent" &&
                          hoveredPlanet === p.name &&
                          p.name === "Venus"
                        ? theme.styles.pallete.indianYellow
                        : "transparent" &&
                          hoveredPlanet === p.name &&
                          p.name === "Earth"
                        ? theme.styles.pallete.blueViolet
                        : "transparent" &&
                          hoveredPlanet === p.name &&
                          p.name === "Mars"
                        ? theme.styles.pallete.cinnabar
                        : "transparent" &&
                          hoveredPlanet === p.name &&
                          p.name === "Jupiter"
                        ? theme.styles.pallete.cgRed
                        : "transparent" &&
                          hoveredPlanet === p.name &&
                          p.name === "Saturn"
                        ? theme.styles.pallete.flame
                        : "transparent" &&
                          hoveredPlanet === p.name &&
                          p.name === "Uranus"
                        ? theme.styles.pallete.lightSeaGreen
                        : "transparent" &&
                          hoveredPlanet === p.name &&
                          p.name === "Neptune"
                        ? theme.styles.pallete.ultramarineBlue
                        : "transparent"
                    }
                  />
                  <Links
                    // onMouseEnter={handleMouseEnter}
                    onMouseEnter={() => setHoveredPlanet(p.name)}
                    onMouseLeave={() => setHoveredPlanet(null)}
                    onClick={openPlanetPage}
                    to={`${p.name}`}
                  >
                    {p.name}
                  </Links>
                </Li>
              );
            })}
          </TabletList>
          <MenuIcon
            showMenu={showMenu}
            onClick={() => setShowMenu(!showMenu)}
            src={iconHamburger}
            alt="menu icon"
          />
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

interface Props {
  showMenu: boolean;
}

const MenuIcon = styled.img<Props>`
  opacity: ${(props) => (props.showMenu === true ? 0.4 : 1)};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

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

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 22px 40px 27px 32px;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.styles.fonts.antonioFont};
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-align: left;

  @media screen and (min-width: 768px) {
    padding-bottom: 39px;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 0;
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

  @media screen and (min-width: 1024px) {
    width: 48.65%;
    padding: 0;
  }
`;

const Li = styled.li`
  list-style: none;
`;

interface LinksProps {
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Links = styled(Link)<LinksProps>`
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

interface HoverProps {
  mycolor: string;
}

const TopLine = styled.hr<HoverProps>`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    border: 4px solid ${(props) => props.mycolor};
    width: 100%;
    position: relative;
    bottom: 75%;
  }
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
