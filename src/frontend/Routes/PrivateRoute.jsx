import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context";

function PrivateRoute({ children }) {
	const {
		authState: { token },
	} = useAuthContext();
	const { location } = useLocation();
	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}

export { PrivateRoute };
