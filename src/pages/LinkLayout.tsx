import { Link, Outlet } from "react-router-dom";
import planetData from "../data/data.json";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import arrowIcon from "../assets/icon-chevron.svg";
import { stylesProps } from "../types";

const LinkLayout = () => {
  const [showMenu, setShowMenu] = useState(true);

  interface planetColorsProps {
    [key: string]: string;
  }

  const theme: stylesProps = {
    styles: {
      pallete: {
        white: "#FFFFFF",
        backgroundBlue: "#070724",
        arsenic: "#38384F",
        romanSilver: "#838391",
        moonstone: "#419EBB",
        indianYellow: "#EDA249",
        blueViolet: "#6f2ed6",
        cinnabar: "#D14C32",
        cgRed: "#D83A34",
        flame: "#CD5120",
        lightSeaGreen: "#1ec2a4",
        ultramarineBlue: "#2d68f0",
      },
      planetIcons: {
        mercuryIcon: "#DEF4FC",
        venusIcon: "#F7CC7F",
        earthIcon: "#545BFE",
        marsIcon: "#FF6A45",
        jupiterIcon: "#ECAD7A",
        saturnIcon: "#FCCB6B",
        uranusIcon: "#65F0D5",
        naptuneIcon: "#497EFA",
      },
      fonts: {
        spartanFont: "'League Spartan', sans-serif",
        antonioFont: "'Antonio', sans-serif",
      },
    },
  };

  const planetColors: planetColorsProps = {
    Mercury: theme.styles.planetIcons.mercuryIcon,
    Venus: theme.styles.planetIcons.venusIcon,
    Earth: theme.styles.planetIcons.earthIcon,
    Mars: theme.styles.planetIcons.marsIcon,
    Jupiter: theme.styles.planetIcons.jupiterIcon,
    Saturn: theme.styles.planetIcons.saturnIcon,
    Uranus: theme.styles.planetIcons.uranusIcon,
    Neptune: theme.styles.planetIcons.naptuneIcon,
  };

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
                      <Links to={`${p.name}`}>{p.name}</Links>
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
        {!showMenu && <Outlet />}
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
