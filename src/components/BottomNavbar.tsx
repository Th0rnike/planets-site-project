import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  activeTab: string;
  planetName: string;
}

export default function BottomNavbar(props: Props) {
  const { activeTab, planetName } = props;
  return (
    <BottomNavContainer>
      <LinkElement planetName={planetName} to={"#"}>
        <Number>01</Number>
        <Text>overview</Text>
      </LinkElement>
      <LinkElement planetName={planetName} to={"#"}>
        <Number>02</Number>
        <Text>structure</Text>
      </LinkElement>
      <LinkElement planetName={planetName} to={"#"}>
        <Number>03</Number>
        <Text>surface</Text>
      </LinkElement>
    </BottomNavContainer>
  );
}

const BottomNavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Prop {
  planetName: string;
}

const LinkElement = styled(Link)<Prop>`
  text-decoration: none;
  color: ${({ theme }) => theme.styles.pallete.white};
  text-transform: uppercase;
  padding: 7px 0 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  width: 281px;
  margin-bottom: 16px;
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

const Number = styled.span`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.93px;
  text-align: left;
  padding-right: 8px;
`;

const Text = styled.span`
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.93px;
  text-align: left;
`;
