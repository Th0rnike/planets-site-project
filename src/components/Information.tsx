import styled from "styled-components";

interface Props {
  activeTab: string;
  planetName: string;
  imageUrl: string;
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
  sourceIcon: string;
}

export default function Information(props: Props) {
  const { activeTab, imageUrl, planetInfo, planetName, sourceIcon } = props;
  return (
    <div>
      {activeTab === "overview" && (
        <div className="overview">
          <ImageContainer image={planetName || ""}>
            <PlanetImage src={imageUrl} alt="planet image" />
          </ImageContainer>
          <Name>{planetInfo.name}</Name>
          <Content>{planetInfo.overview.content}</Content>
          <SourceDiv>
            <SrcText>
              Source:{" "}
              <Wikipedia href={planetInfo.overview.source}>Wikipedia</Wikipedia>
              <img src={sourceIcon} alt="source icon" />
            </SrcText>
          </SourceDiv>
        </div>
      )}
      {activeTab === "structure" && (
        <div className="structure">
          <ImageContainer image={planetName || ""}>
            <PlanetImage src={imageUrl} alt="planet image" />
          </ImageContainer>
          <Name>{planetInfo.name}</Name>
          <Content>{planetInfo.structure.content}</Content>
          <SourceDiv>
            <SrcText>
              Source:{" "}
              <Wikipedia href={planetInfo.structure.source}>
                Wikipedia
              </Wikipedia>
              <img src={sourceIcon} alt="source icon" />
            </SrcText>
          </SourceDiv>
        </div>
      )}
      {activeTab === "surface" && (
        <div className="surface">
          <ImageContainer image={planetName || ""}>
            <PlanetImage src={imageUrl} alt="planet image" />
          </ImageContainer>
          <Name>{planetInfo.name}</Name>
          <Content>{planetInfo.geology.content}</Content>
          <SourceDiv>
            <SrcText>
              Source:{" "}
              <Wikipedia href={planetInfo.geology.source}>Wikipedia</Wikipedia>
              <img src={sourceIcon} alt="source icon" />
            </SrcText>
          </SourceDiv>
        </div>
      )}
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
    if (props.image === "Nepture") return "173px";
  }};
  margin: 0 auto;
  padding: 95px 0 98px 0;
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
