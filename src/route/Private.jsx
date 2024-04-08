import { useSelector } from "react-redux";
import Forbidden from "../app/403/Forbidden";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, module }) => {
  const { user } = useSelector((state) => state);
  const hasAccess = user?.modules.find((item) => item == module);

  return user.isLoggedIn ? (
    hasAccess ? (
      children
    ) : (
      <Forbidden />
    )
  ) : (
    <Navigate to="/" />
  );
};
