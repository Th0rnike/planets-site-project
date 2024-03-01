import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  activeTab: string;
  planetName: string;
  handleChange: (value: string) => void;
}

export default function BottomNavbar(props: Props) {
  const { activeTab, planetName, handleChange } = props;
  return (
    <BottomNavContainer>
      <LinkElement
        planetName={planetName}
        onClick={() => handleChange("overview")}
        to={"#"}
      >
        {activeTab === "overview" ? (
          <TabColor planetName={planetName}>
            <Number>01</Number>
            <Text>overview</Text>
          </TabColor>
        ) : (
          <>
            <InsidePadding>
              <Number>01</Number>
              <Text>overview</Text>
            </InsidePadding>
          </>
        )}
      </LinkElement>

      <LinkElement
        planetName={planetName}
        onClick={() => handleChange("structure")}
        to={"#"}
      >
        {activeTab === "structure" ? (
          <TabColor planetName={planetName}>
            <Number>02</Number>
            <Text>structure</Text>
          </TabColor>
        ) : (
          <InsidePadding>
            <Number>02</Number>
            <Text>structure</Text>
          </InsidePadding>
        )}
      </LinkElement>

      <LinkElement
        planetName={planetName}
        onClick={() => handleChange("surface")}
        to={"#"}
      >
        {activeTab === "surface" ? (
          <TabColor planetName={planetName}>
            <Number>03</Number>
            <Text>surface</Text>
          </TabColor>
        ) : (
          <InsidePadding>
            <Number>03</Number>
            <Text>surface</Text>
          </InsidePadding>
        )}
      </LinkElement>
    </BottomNavContainer>
  );
}

const BottomNavContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const LinkElement = styled(Link)<Prop>`
  text-decoration: none;
  color: ${({ theme }) => theme.styles.pallete.white};
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.styles.pallete.hoverColor};
  }
`;

const Number = styled.span`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  padding-right: 8px;
  font-size: 9px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.93px;

  @media screen and (min-width: 1024px) {
    font-size: 12px;
    letter-spacing: 2.57px;
  }
`;

const Text = styled.span`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  font-size: 11px;
  font-size: 9px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.93px;

  @media screen and (min-width: 1024px) {
    font-size: 12px;
    letter-spacing: 2.57px;
  }
`;

interface Prop {
  planetName: string;
}

const TabColor = styled.div<Prop>`
  padding: 7px 0 8px 20px;
  background-color: ${(props) => {
    const { planetName } = props;
    if (planetName === "Mercury") return props.theme.styles.pallete.moonstone;
    if (planetName === "Venus") return props.theme.styles.pallete.indianYellow;
    if (planetName === "Earth") return props.theme.styles.pallete.blueViolet;
    if (planetName === "Mars") return props.theme.styles.pallete.cinnabar;
    if (planetName === "Jupiter") return props.theme.styles.pallete.cgRed;
    if (planetName === "Saturn") return props.theme.styles.pallete.flame;
    if (planetName === "Uranus")
      return props.theme.styles.pallete.lightSeaGreen;
    if (planetName === "Neptune")
      return props.theme.styles.pallete.ultramarineBlue;
  }};
`;

const InsidePadding = styled.div`
  padding: 7px 0 8px 20px;
`;
