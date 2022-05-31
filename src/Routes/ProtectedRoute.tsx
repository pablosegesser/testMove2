import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {RootState} from "../Redux/store";

interface ProtectedRouteProps {
  role: string;
  redirectPath?: string;
  children?: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  role,
  redirectPath = "/",
  children,
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  if (role && user) {
    if (user.role !== role) {
      return <Navigate to={redirectPath} replace />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
