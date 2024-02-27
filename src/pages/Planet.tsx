import { useParams } from "react-router-dom";
import { planetProps } from "../types";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import backgroundStars from "../assets/background-stars.svg";
import NavbarComponent from "../components/Navbar";
import { theme } from "../theme";
import sourceIcon from "../assets/icon-source.svg";
import Information from "../components/Information";

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

          <Details>
            <Box>
              <DetailName>rotation time</DetailName>
              <DetailNumbers>{planetInfo.rotation}</DetailNumbers>
            </Box>
            <Box>
              <DetailName>revolution time</DetailName>
              <DetailNumbers>{planetInfo.revolution}</DetailNumbers>
            </Box>
            <Box>
              <DetailName>radius</DetailName>
              <DetailNumbers>{planetInfo.radius}</DetailNumbers>
            </Box>
            <Box>
              <DetailName>average temp. </DetailName>
              <DetailNumbers>{planetInfo.temperature}</DetailNumbers>
            </Box>
          </Details>
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

const Details = styled.div`
  margin-top: 28px;
  margin-bottom: 47px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 8px;
  padding: 0 24px;
`;

const DetailName = styled.p`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  color: ${({ theme }) => theme.styles.pallete.white};
  font-size: 12px;
  font-weight: 700;
  opacity: 0.5;
  text-transform: uppercase;
`;

const DetailNumbers = styled.h1`
  font-family: ${({ theme }) => theme.styles.fonts.antonioFont};
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.75px;
  text-align: right;
  padding: 9px 0 13px;
`;

export default Planet;
