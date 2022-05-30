import { Route, Routes } from "react-router-dom";
import React from "react";
import Consumer from "../pages/consumer/Consumer";
import Home from "../pages/home/Home";
import MyStreams from "../pages/mystreams/Mystreams";
import Profile from "../pages/profile/Profile";
import Shop from "../pages/Shop";
import ScheduleStream from '../pages/schedule/ScheduleStream'

export const AppRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consumer" element={<Consumer />} />
            <Route path="/mystreams" element={<MyStreams />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/scheduleStream" element={<ScheduleStream />} />
        </Routes>
    );
};
