import { useParams } from "react-router-dom";
import { planetProps } from "../types";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import backgroundStars from "../assets/background-stars.svg";
import NavbarComponent from "../components/Navbar";
import { theme } from "../theme";
import sourceIcon from "../assets/icon-source.svg";
import Information from "../components/Information";
import DetailsComponent from "../components/Details";

const Planet = (props: planetProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const { planetData } = props;
  const { planetName } = useParams();

  const planetInfo = planetData.find((p) => p.name === planetName);

  if (!planetInfo) {
    return null;
  }

  const imageName = planetInfo.name
    ? planetInfo.name[0].toLowerCase() + planetInfo.name.slice(1)
    : "";

  const imageUrl = `/src/assets/planet-${imageName}.svg`;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavbarComponent
          planetName={planetName || ""}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <HorizontalRule />
        <MobilePadding>
          <Information
            activeTab={activeTab}
            imageUrl={imageUrl}
            planetInfo={planetInfo}
            planetName={planetName || ""}
            sourceIcon={sourceIcon}
          />

          <DetailsComponent planetInfo={planetInfo} />
        </MobilePadding>
      </div>
    </ThemeProvider>
  );
};

const MobilePadding = styled.div`
  padding: 0 24px 0;
  background-image: url(${backgroundStars});
  background-repeat: no-repeat;
  background-position: center;
  color: ${({ theme }) => theme.styles.pallete.white};
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: ${({ theme }) => theme.styles.pallete.white};
  opacity: 0.2;
  position: relative;
  top: -1px;
`;

export default Planet;
