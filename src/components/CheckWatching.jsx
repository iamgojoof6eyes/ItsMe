import ReaderImage from "@/assets/avatars/Reader.svg";
import { updateViewer } from "@/store/viewer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function CheckWatching({ children, bypass = false }) {
  const viewer = useSelector((state) => state.viewer.currentViewer);
  if (bypass && !viewer) {
    const dispatch = useDispatch();
    dispatch(updateViewer({id: "reader", name: "Reader", avatar: ReaderImage}));
  }
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!viewer && !bypass) {
      navigate("/", { replace: true });
    }
  }, [viewer, navigate, location.pathname]);

  if (!viewer && !bypass) {
    return null;
  }

  return <>{children}</>;
}

export default CheckWatching;
