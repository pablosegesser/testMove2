import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/home/Home";
import MyStreams from "../pages/mystreams/Mystreams";
import Profile from "../pages/profile/Profile";

export const AppRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mystreams" element={<MyStreams />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};
