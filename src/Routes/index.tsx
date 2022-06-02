import {Route, Routes} from "react-router-dom";
import React from "react";
import Consumer from "../pages/consumer/Consumer";
import Home from "../pages/home/Home";
import MyStreams from "../pages/mystreams/Mystreams";
import Profile from "../pages/profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Shop from "../pages/Shop";
import ScheduleStream from "../pages/schedule/ScheduleStream";
import SelectDate from "../pages/schedule/SelectDate";
import UpploadImage from "../pages/schedule/UpploadImage";
import UserInfo from "../pages/schedule/UserInfo";

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
      <Route path="/shop" element={<Shop />} />
      <Route path="/scheduleStream" element={<ScheduleStream />} />
      <Route path="/selectDate" element={<SelectDate />} />
      <Route path="/upploadImage" element={<UpploadImage />} />
      <Route path="/userInfo" element={<UserInfo />} />
    </Routes>
  );
};
