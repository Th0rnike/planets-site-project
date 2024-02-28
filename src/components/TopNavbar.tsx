import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/background-stars.svg";

interface navProps {
  activeTab: string;
  planetName: string;
  handleChange: (value: string) => void;
}

export default function TopNavbar(props: navProps) {
  const { activeTab, planetName, handleChange } = props;

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
            surface
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
    display: none;
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
      if (planetName === "Mercury") return props.theme.styles.pallete.moonstone;
      if (planetName === "Venus")
        return props.theme.styles.pallete.indianYellow;
      if (planetName === "Earth") return props.theme.styles.pallete.blueViolet;
      if (planetName === "Mars") return props.theme.styles.pallete.cinnabar;
      if (planetName === "Jupiter") return props.theme.styles.pallete.cgRed;
      if (planetName === "Saturn") return props.theme.styles.pallete.flame;
      if (planetName === "Uranus")
        return props.theme.styles.pallete.lightSeaGreen;
      if (planetName === "Neptune")
        return props.theme.styles.pallete.ultramarineBlue;
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
