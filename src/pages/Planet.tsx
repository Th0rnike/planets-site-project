import { Link, useParams } from "react-router-dom";
import { planetProps } from "../types";
import { useState } from "react";
import styled from "styled-components";
import backgroundStars from "../assets/background-stars.svg";

const Planet = (props: planetProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const { planetData } = props;
  const { planetName } = useParams();

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

  const imageUrl = `/src/assets/planet-${imageName}.svg`;

  return (
    <div>
      <Navbar>
        <InfoLinks to={"#"} onClick={() => handleChange("overview")}>
          <Tab style={{ opacity: activeTab === "overview" ? 1 : 0.5 }}>
            overview
            {activeTab === "overview" && <BottomLine />}
          </Tab>
        </InfoLinks>
        <InfoLinks to={"#"} onClick={() => handleChange("structure")}>
          <Tab style={{ opacity: activeTab === "structure" ? 1 : 0.5 }}>
            structure
            {activeTab === "structure" && <BottomLine />}
          </Tab>
        </InfoLinks>
        <InfoLinks to={"#"} onClick={() => handleChange("surface")}>
          <Tab style={{ opacity: activeTab === "surface" ? 1 : 0.5 }}>
            structure
            {activeTab === "surface" && <BottomLine />}
          </Tab>
        </InfoLinks>
      </Navbar>
      <HorizontalRule />

      <MobilePadding>
        {activeTab === "overview" && (
          <div className="overview">
            <ImageContainer>
              <PlanetImage src={imageUrl} alt="planet image" />
            </ImageContainer>
            <h1>{planetInfo.name}</h1>
            <p>{planetInfo.overview.content}</p>
            <p>{planetInfo.overview.source}</p>
          </div>
        )}
        {activeTab === "structure" && (
          <div className="structure">
            <PlanetImage src={imageUrl} alt="planet image" />
            <h1>{planetInfo.name}</h1>
            <p>{planetInfo.structure.content}</p>
            <p>{planetInfo.structure.source}</p>
          </div>
        )}
        {activeTab === "surface" && (
          <div className="surface">
            <PlanetImage src={imageUrl} alt="planet image" />
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
  text-decoration: none;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: white;
  opacity: 0.2;
  position: relative;
  top: -1px;
`;

const BottomLine = styled.hr`
  border: 4px solid ${({ theme }) => theme.styles.pallete.moonstone};
  margin-top: 20px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
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

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const PlanetImage = styled.img`
  width: calc(100% / 2.6); /* Set the width to be 38.46% of its original size */
  height: auto; /* Maintain the aspect ratio of the image */
  display: block;
  margin: 0 auto;
`;

export default Planet;
