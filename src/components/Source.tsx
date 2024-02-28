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
  };
  sourceIcon: string;
}

export default function Source(props: Props) {
  const { planetInfo, sourceIcon } = props;
  return (
    <div>
      <SourceDiv>
        <SrcText>
          Source:{" "}
          <Wikipedia href={planetInfo.overview.source}>Wikipedia</Wikipedia>
          <img src={sourceIcon} alt="source icon" />
        </SrcText>
      </SourceDiv>
    </div>
  );
}

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
