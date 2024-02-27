import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/background-stars.svg";

interface navProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  planetName: string;
}

export default function NavbarComponent(props: navProps) {
  const { activeTab, setActiveTab, planetName } = props;
  const handleChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <MobileNavbar>
        <InfoLinks to={"#"} onClick={() => handleChange("overview")}>
          <Tab style={{ opacity: activeTab === "overview" ? 1 : 0.5 }}>
            overview
            {activeTab === "overview" && <BottomLine planetName={planetName} />}
          </Tab>
        </InfoLinks>
        <InfoLinks to={"#"} onClick={() => handleChange("structure")}>
          <Tab style={{ opacity: activeTab === "structure" ? 1 : 0.5 }}>
            structure
            {activeTab === "structure" && (
              <BottomLine planetName={planetName} />
            )}
          </Tab>
        </InfoLinks>
        <InfoLinks to={"#"} onClick={() => handleChange("surface")}>
          <Tab style={{ opacity: activeTab === "surface" ? 1 : 0.5 }}>
            structure
            {activeTab === "surface" && <BottomLine planetName={planetName} />}
          </Tab>
        </InfoLinks>
      </MobileNavbar>
    </>
  );
}

const MobileNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  background-image: url(${background});
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {

  }
`;

const InfoLinks = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 768px) {
    border: 1px solid green;
  }
`;

interface prop {
  planetName: string;
}

const BottomLine = styled.hr<prop>`
  border: 4px solid
    ${(props) => {
      const { planetName } = props;
      if (planetName === "Mercury")
        return props.theme.styles.planetIcons.mercuryIcon;
      if (planetName === "Venus")
        return props.theme.styles.planetIcons.venusIcon;
      if (planetName === "Earth")
        return props.theme.styles.planetIcons.earthIcon;
      if (planetName === "Mars") return props.theme.styles.planetIcons.marsIcon;
      if (planetName === "Jupiter")
        return props.theme.styles.planetIcons.jupiterIcon;
      if (planetName === "Saturn")
        return props.theme.styles.planetIcons.saturnIcon;
      if (planetName === "Uranus")
        return props.theme.styles.planetIcons.uranusIcon;
      if (planetName === "Neptune")
        return props.theme.styles.planetIcons.neptuneIcon;
    }};
  margin-top: 20px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Tab = styled.h2`
  color: white;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  font-size: 9px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 1.93px;
  text-align: center;
`;
