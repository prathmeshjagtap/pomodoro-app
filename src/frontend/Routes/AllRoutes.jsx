import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Pomodoro, Tasks } from "../screens";
import Mockman from "mockman-js";
import { PrivateRoute } from "./PrivateRoute";

function AllRoutes() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/pomodoro"
					element={
						<PrivateRoute>
							<Pomodoro />
						</PrivateRoute>
					}
				/>
				<Route
					path="/pomodoro/:taskId"
					element={
						<PrivateRoute>
							<Pomodoro />
						</PrivateRoute>
					}
				/>
				<Route
					path="/tasks"
					element={
						<PrivateRoute>
							<Tasks />
						</PrivateRoute>
					}
				/>
				{/* Remove later */}
				<Route path="/mockman" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export { AllRoutes };
