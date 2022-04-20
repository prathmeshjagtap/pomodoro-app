import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, TaskProvider } from "./frontend/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Call make Server
makeServer();
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<TaskProvider>
					<App />
				</TaskProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
