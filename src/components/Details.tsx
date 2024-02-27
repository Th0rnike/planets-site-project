import styled from "styled-components";

interface Props {
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
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
      planet: string;
      internal: string;
      geology: string;
    };
  };
}

export default function DetailsComponent(props: Props) {
  const { planetInfo } = props;
  return (
    <div>
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
    </div>
  );
}

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
