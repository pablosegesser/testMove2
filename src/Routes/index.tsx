import React from "react";
import { Route, Routes } from "react-router-dom";
// pages
import Consumer from "../pages/consumer/Consumer";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyStreams from "../pages/mystreams/Mystreams";
import Profile from "../pages/profile/Profile";
import ProtectedRoute from "./ProtectedRoute";
import ScheduleStream from "../pages/schedule/ScheduleStream";
import Shop from "../pages/Shop";

export const AppRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
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
		</Routes>
	);
};
