import styled from "styled-components";

interface Props {
  activeTab: string;
  planetName: string;
  imageUrl: string;
  sourceIcon: string;
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
  };
}

export default function TabContent(props: Props) {
  const OVERVIEW = "overview";
  const STRUCTURE = "structure";
  const SURFACE = "geology";
  const { activeTab, imageUrl, planetInfo, planetName, sourceIcon } = props;

  const getTabContent = () => {
    switch (activeTab) {
      case OVERVIEW:
        return {
          content: planetInfo.overview.content,
          source: planetInfo.overview.source,
        };
      case STRUCTURE:
        return {
          content: planetInfo.structure.content,
          source: planetInfo.structure.source,
        };
      case SURFACE:
        return {
          content: planetInfo.geology.content,
          source: planetInfo.geology.source,
        };
      default: {
        return {
          content: "",
          source: "",
        };
      }
    }
  };

  const tabContent = getTabContent();

  return (
    <div>
      <div className={activeTab}>
        <ImageContainer image={planetName || ""}>
          <PlanetImage src={imageUrl} alt="planet image" />
        </ImageContainer>
        <Name>{planetName}</Name>
        <div>
          <Content>{tabContent.content}</Content>
          <SourceDiv>
            <SrcText>
              Source: <Wikipedia href={tabContent.source}>Wikipedia</Wikipedia>
              <img src={sourceIcon} alt="source icon" />
            </SrcText>
          </SourceDiv>
        </div>
      </div>
    </div>
  );
}

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
  padding: 95px 0 98px 0;

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
`;

const Content = styled.p`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  margin: 16px 0 32px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
`;

const Wikipedia = styled.a`
  color: ${({ theme }) => theme.styles.pallete.white};
  opacity: 0.5;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
`;
