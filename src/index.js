import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, TaskProvider, TimerProvider } from "./frontend/context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<TaskProvider>
					<TimerProvider>
						<App />
					</TimerProvider>
				</TaskProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
