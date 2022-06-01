import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {RootState} from "../Redux/store";

interface ProtectedRouteProps {
  role?: string;
  redirectPath?: string;
  children?: JSX.Element;
}

const checkArray = (a, b) => {
  const diff = b.filter((e) => !a.includes(e));
  if (diff.length !== 0) {
    return false;
  }
  return true;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  role = "consumer",
  redirectPath = "/",
  children,
}) => {
  const {user} = useSelector((state: RootState) => state.auth);
  let roles = ["consumer"];
  if (role !== "consumer") {
    roles.push(role);
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  if (role && user) {
    if (!checkArray(user.role, roles)) {
      return <Navigate to={redirectPath} replace />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
