import styled from "styled-components";
import BottomNavbar from "./BottomNavbar";

interface Props {
  activeTab: string;
  planetName: string;
  imageUrl: string;
  sourceIcon: string;
  handleChange: (val: string) => void;
  planetInfo: {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    images: {
      planet: string;
      internal: string;
      geology: string;
    };
  };
}

export default function TabContent(props: Props) {
  const OVERVIEW = "overview";
  const STRUCTURE = "structure";
  const SURFACE = "surface";

  const { activeTab, planetInfo, planetName, sourceIcon, handleChange } = props;

  const getTabContent = () => {
    switch (activeTab) {
      case OVERVIEW:
        return {
          content: planetInfo.overview.content,
          source: planetInfo.overview.source,
          image: "/src" + planetInfo.images.planet.split(".")[1] + ".svg",
        };
      case STRUCTURE:
        return {
          content: planetInfo.structure.content,
          source: planetInfo.structure.source,
          image: "/src" + planetInfo.images.internal.split(".")[1] + ".svg",
        };
      case SURFACE:
        return {
          content: planetInfo.geology.content,
          source: planetInfo.geology.source,
          image: "/src" + planetInfo.images.planet.split(".")[1] + ".svg",
          secondImage:
            "/src" + planetInfo.images.geology.split(".")[1] + ".png",
        };
      default: {
        return {
          content: "",
          source: "",
          image: "",
        };
      }
    }
  };

  const tabContent = getTabContent();

  return (
    <MainContent>
      <ImageContainer image={planetName || ""}>
        <PlanetImage src={tabContent.image} alt="planet image" />
        {activeTab === SURFACE && <Geology src={tabContent.secondImage} />}
      </ImageContainer>
      <Current>
        <CurrentLeft>
          <Name>{planetName}</Name>
          <Content>{tabContent.content}</Content>
          <SourceDiv>
            <SrcText>
              Source: <Wikipedia href={tabContent.source}>Wikipedia</Wikipedia>
              <img src={sourceIcon} alt="source icon" />
            </SrcText>
          </SourceDiv>
        </CurrentLeft>
        <BottomNavbar
          handleChange={handleChange}
          activeTab={activeTab}
          planetName={planetName}
        />
      </Current>
    </MainContent>
  );
}

const MainContent = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 154px;
  }
`;

interface props {
  image: string;
}

const ImageContainer = styled.div<props>`
  width: ${(props) => {
    if (props.image === "Mercury") return "111px";
    if (props.image === "Venus") return "154px";
    if (props.image === "Earth") return "173px";
    if (props.image === "Mars") return "129px";
    if (props.image === "Jupiter") return "224px";
    if (props.image === "Saturn") return "159px";
    if (props.image === "Uranus") return "176px";
    if (props.image === "Neptune") return "173px";
  }};
  margin: 0 auto;
  padding: 95px 0 0 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: ${(props) => {
      if (props.image === "Mercury") return "184px";
      if (props.image === "Venus") return "253px";
      if (props.image === "Earth") return "285px";
      if (props.image === "Mars") return "213px";
      if (props.image === "Jupiter") return "369px";
      if (props.image === "Saturn") return "263px";
      if (props.image === "Uranus") return "290px";
      if (props.image === "Neptune") return "285px";
    }};
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    width: 53%;
    text-align: center;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PlanetImage = styled.img`
  max-width: 100%;
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.styles.fonts.antonioFont};
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 62px;
  }

  @media screen and (min-width: 1024px) {
    font-family: ${({ theme }) => theme.styles.fonts.antonioFont};
    font-size: 80px;
    line-height: 104px;
    text-align: left;
  }
`;

const Content = styled.p`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  margin: 16px 0 32px;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 11px;
  }

  @media screen and (min-width: 1024px) {
    margin: 23px 0 24px;
    font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    max-height: 150px;
    max-width: 350px;
  }
`;

const SourceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SrcText = styled.p`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  color: ${({ theme }) => theme.styles.pallete.white};
  opacity: 0.5;
  font-size: 12px;
  line-height: 25px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;

  @media screen and (min-width: 1024px) {
    font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
    font-size: 14px;
  }
`;

const Wikipedia = styled.a`
  color: ${({ theme }) => theme.styles.pallete.white};
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  opacity: 0.5;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;

  @media screen and (min-width: 1024px) {
    font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
    font-size: 14px;
  }
`;

const Current = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 69px;
    margin-top: 50px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    gap: 39px;
    justify-content: center;
    align-items: flex-start;
  }
`;

const CurrentLeft = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Geology = styled.img`
  width: 35%;
  position: relative;
  top: -50px;
  @media screen and (min-width: 768px) {
    top: -76px;
  }
  @media screen and (min-width: 1024px) {
    display: inline;
    position: relative;
    max-width: 133px;
    width: 25%;
    top: -110px;
  }
`;
