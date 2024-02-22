import { Link, Outlet } from "react-router-dom";
import planetData from "../data/data.json";

const LinkLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          {planetData.map((p, index) => (
            <li key={index}>
              <Link to={`${p.name}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default LinkLayout;
