import { Link, useParams } from "react-router-dom";
import { planetProps } from "../types";
import { useState } from "react";

const Planet = (props: planetProps) => {
  const { planetData } = props;
  const { planetName } = useParams();

  const [activeTab, setActiveTab] = useState("overview");

  const planetInfo = planetData.find((p) => p.name === planetName);

  if (!planetInfo) {
    return null;
  }

  const handleChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <Link to={"#"} onClick={() => handleChange("overview")}>
          overview
        </Link>
        <br />
        <Link to={"#"} onClick={() => handleChange("structure")}>
          structure
        </Link>
        <br />
        <Link to={"#"} onClick={() => handleChange("surface")}>
          surface
        </Link>
      </nav>

      {activeTab === "overview" && (
        <div className="overview">
          <h1>{planetInfo.name}</h1>
          <p>{planetInfo.overview.content}</p>
          <p>{planetInfo.overview.source}</p>
        </div>
      )}
      {activeTab === "structure" && (
        <div className="structure">
          <h1>{planetInfo.name}</h1>
          <p>{planetInfo.structure.content}</p>
          <p>{planetInfo.structure.source}</p>
        </div>
      )}

      {activeTab === "surface" && (
        <div className="surface">
          <h1>{planetInfo.name}</h1>
          <p>{planetInfo.geology.content}</p>
          <p>{planetInfo.geology.source}</p>
        </div>
      )}

      <div>
        <div>
          <p>rotation time</p>
          <h1>{planetInfo.rotation}</h1>
        </div>
        <div>
          <p>revolution time</p>
          <h1>{planetInfo.revolution}</h1>
        </div>
        <div>
          <p>radius</p>
          <h1>{planetInfo.radius}</h1>
        </div>
        <div>
          <p>average temp. </p>
          <h1>{planetInfo.temperature}</h1>
        </div>
      </div>
    </div>
  );
};

export default Planet;
