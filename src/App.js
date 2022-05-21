import "./App.css";
import { AllRoutes } from "./frontend/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "./frontend/context";
import { useEffect } from "react";

function App() {
	const { pathname } = useLocation();
	const {
		authState: { token },
	} = useAuthContext();
	useEffect(() => {
		if (!token || pathname !== "/pomodoro") {
			document.title = "Tomato";
		}
	}, [token, pathname]);

	return (
		<div className="bg-blue-400 dark:bg-neutral-800 dark:text-white min-h-screen ">
			<AllRoutes />
			<ToastContainer />
		</div>
	);
}

export default App;
