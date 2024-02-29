import { useParams } from "react-router-dom";
import { planetProps } from "../types";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import backgroundStars from "../assets/background-stars.svg";
import { theme } from "../theme";
import sourceIcon from "../assets/icon-source.svg";
import Information from "../components/Information";
import DetailsComponent from "../components/Details";
import TopNavbar from "../components/TopNavbar";

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

  const handleChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <TopNavbar
          planetName={planetName || ""}
          activeTab={activeTab}
          handleChange={handleChange}
        />
        <HorizontalRule />
        <MobilePadding>
          <Information
            handleChange={handleChange}
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

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1024px) {
    padding: 96px 165px 0;
  }
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: ${({ theme }) => theme.styles.pallete.white};
  opacity: 0.2;
  position: relative;
  top: -1px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Planet;
