import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
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

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consumer" element={<Consumer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/mystreams"
        element={
          <ProtectedRoute redirectPath="/" role="creator">
            <MyStreams />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute redirectPath="/">
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/shop" element={<Shop />} />
      <Route path="/scheduleStream" element={<ScheduleStream />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
