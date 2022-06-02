import React from "react";
import {Link, Navigate, Route, Routes} from "react-router-dom";
// pages
import Consumer from "../pages/consumer/Consumer";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyStreams from "../pages/mystreams/Mystreams";
import Profile from "../pages/profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/login/Register";
import ScheduleStream from "../pages/schedule/ScheduleStream";
import Shop from "../pages/Shop";
import Header from "../components/Header/header";
import Logo from "../ui-kit/logo/logo";
import AtomIcon from "../ui-kit/icons/stream";
import FavIcon from "../ui-kit/icons/favourite";
import atom from "../assets/images/atom2.svg";

export const AppRouter = (): JSX.Element => {
  // add header func
  const HeadAdd = (element: JSX.Element, header: boolean) => {
    if (header) {
      return (
        <>
          <Header
            className="withIcon"
            logo={<Logo />}
            icon={
              <Link to="/mystreams">
                <AtomIcon />
              </Link>
            }
            icon2={<FavIcon />}
            icon3={
              <Link to="/consumer">
                <img src={atom} alt="" />{" "}
              </Link>
            }
          />
          {element}
        </>
      );
    }
    return element;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={HeadAdd(<Home />, true)} />
        <Route
          path="/consumer"
          element={HeadAdd(
            <ProtectedRoute redirectPath="/">
              <Consumer />
            </ProtectedRoute>,
            true
          )}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/mystreams"
          element={
            <ProtectedRoute redirectPath="/" role="creator">
              <MyStreams />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute redirectPath="/">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute redirectPath="/" role="creator">
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scheduleStream"
          element={
            <ProtectedRoute redirectPath="/" role="creator">
              <ScheduleStream />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
