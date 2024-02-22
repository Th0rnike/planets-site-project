import { Link, Outlet } from "react-router-dom";
import planetData from "../data/data.json";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { DefaultColors } from "../components/DefaultColors";

const LinkLayout = () => {
  const { colors } = DefaultColors;
  return (
    <>
      <GlobalStyles />
      <Header backgroundColor={colors.backgroundBlue} textColor={colors.white}>
        <Title>the planets</Title>
        <nav>
          <Ul>
            {planetData.map((p, index) => (
              <Li key={index}>
                <Links to={`${p.name}`}>{p.name}</Links>
              </Li>
            ))}
          </Ul>
        </nav>
      </Header>

      <Outlet />
    </>
  );
};

interface HeaderProps {
  backgroundColor: string;
  textColor: string;
}

const Header = styled.div<HeaderProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 28px;
  text-transform: uppercase;
`;

const Ul = styled.ul`
  display: flex;
  gap: 33px;
`;

const Li = styled.li`
  list-style: none;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default LinkLayout;
