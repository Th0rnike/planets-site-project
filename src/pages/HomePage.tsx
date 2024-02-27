import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/Mercury");
    }
  }, [location.pathname, navigate]);
  return <></>;
};

export default HomePage;
