import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function CheckWatching({ children }) {
  const viewer = useSelector((state) => state.viewer.currentViewer);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!viewer) {
      navigate("/", { replace: true });
    }
  }, [viewer, navigate, location.pathname]);

  if (!viewer) {
    return null;
  }

  return <>{children}</>;
}

export default CheckWatching;
