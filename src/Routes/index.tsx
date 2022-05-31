import {Route, Routes} from "react-router-dom";
import React from "react";
import Consumer from "../pages/consumer/Consumer";
import Home from "../pages/home/Home";
import MyStreams from "../pages/mystreams/Mystreams";
import Profile from "../pages/profile/Profile";
import ProtectedRoute from "./ProtectedRoute";

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consumer" element={<Consumer />} />
      <Route path="/mystreams" element={<MyStreams />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute redirectPath="/" role="consumer">
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
