import { Link, useParams } from "react-router-dom";
import { planetProps } from "../types";
import { useState } from "react";
import styled from "styled-components";
import backgroundStars from "../assets/background-stars.svg";
import earth from "../assets/planet-earth.svg";

const Planet = (props: planetProps) => {
  const { planetData } = props;
  const { planetName } = useParams();

  const [activeTab, setActiveTab] = useState("overview");

  const planetInfo = planetData.find((p) => p.name === planetName);

  if (!planetInfo) {
    return null;
  }

  const handleChange = (tab: string) => {
    setActiveTab(tab);
  };

  const imageName = planetInfo.name
    ? planetInfo.name[0].toLowerCase() + planetInfo.name.slice(1)
    : "";

  const imageUrl = `../assets/planet-${imageName}.svg`;

  return (
    <div>
      <Navbar>
        <InfoLinks to={"#"} onClick={() => handleChange("overview")}>
          overview
          {activeTab === "overview" && <BottomLine />}
        </InfoLinks>
        <InfoLinks to={"#"} onClick={() => handleChange("structure")}>
          structure
          {activeTab === "structure" && <BottomLine />}
        </InfoLinks>
        <InfoLinks to={"#"} onClick={() => handleChange("surface")}>
          surface
          {activeTab === "surface" && <BottomLine />}
        </InfoLinks>
      </Navbar>
      <HorizontalRule />

      <MobilePadding>
        {activeTab === "overview" && (
          <div className="overview">
            <img
              style={{ width: "100px", height: "100px" }}
              src={imageUrl}
              alt="planet image"
            />
            <h1>{planetInfo.name}</h1>
            <p>{planetInfo.overview.content}</p>
            <p>{planetInfo.overview.source}</p>
          </div>
        )}
        {activeTab === "structure" && (
          <div className="structure">
            <h1>{planetInfo.name}</h1>
            <p>{planetInfo.structure.content}</p>
            <p>{planetInfo.structure.source}</p>
          </div>
        )}
        {activeTab === "surface" && (
          <div className="surface">
            <h1>{planetInfo.name}</h1>
            <p>{planetInfo.geology.content}</p>
            <p>{planetInfo.geology.source}</p>
          </div>
        )}

        <div>
          <div>
            <p>rotation time</p>
            <h1>{planetInfo.rotation}</h1>
          </div>
          <div>
            <p>revolution time</p>
            <h1>{planetInfo.revolution}</h1>
          </div>
          <div>
            <p>radius</p>
            <h1>{planetInfo.radius}</h1>
          </div>
          <div>
            <p>average temp. </p>
            <h1>{planetInfo.temperature}</h1>
          </div>
        </div>
      </MobilePadding>
    </div>
  );
};

const MobilePadding = styled.div`
  padding: 0 24px 0;
  background-image: url(${backgroundStars});
  background-repeat: no-repeat;
  background-position: center;
  color: wheat;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;

const InfoLinks = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  font-size: 9px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 1.93px;
  text-align: center;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: white;
  opacity: 0.2;
  position: relative;
  top: -1px;
`;

const BottomLine = styled.hr`
  border: 4px solid red;
  margin-top: 20px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`;

export default Planet;
