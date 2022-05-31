import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Consumer from "../pages/consumer/Consumer";
import Home from "../pages/home/Home";
import MyStreams from "../pages/mystreams/Mystreams";
import Profile from "../pages/profile/Profile";
import Login from "../pages/login/Login";


export const AppRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/consumer" element={<Consumer />} />
            <Route path="/mystreams" element={<MyStreams />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};
