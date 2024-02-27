import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import arrowIcon from "../assets/icon-chevron.svg";
import HomePage from "../pages/HomePage";
import { planetColors } from "../theme";
import planetData from "../data/data.json";

interface Props {
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
  openPlanetPage: () => void;
}

export default function Menu(props: Props) {
  const { showMenu, openPlanetPage } = props;

  return (
    <>
      {showMenu ? (
        <MobileList>
          {planetData.map((p, index) => {
            const circleColor = planetColors[p.name];
            return (
              <div key={index}>
                <Li>
                  <Chapter>
                    <Circle style={{ backgroundColor: circleColor }}></Circle>
                    <Links onClick={openPlanetPage} to={`${p.name}`}>
                      {p.name}
                    </Links>
                  </Chapter>
                  <div>
                    <Arrow src={arrowIcon} />
                  </div>
                </Li>
                {index < 7 ? <HorizontalRule /> : ""}
              </div>
            );
          })}
        </MobileList>
      ) : (
        <HomePage />
      )}
      {!showMenu && <Outlet />}
    </>
  );
}

const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 67px 24px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Chapter = styled.div`
  display: flex;
  gap: 25px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;

const Arrow = styled.img`
  width: 6px;
  height: 8px;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1.36px;
  font-family: ${({ theme }) => theme.styles.fonts.spartanFont};
`;

const HorizontalRule = styled.hr`
  height: 1px;
  color: white;
  opacity: 0.2;
  margin: 20px 0;
`;
