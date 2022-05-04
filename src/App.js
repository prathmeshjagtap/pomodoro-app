import "./App.css";
import { AllRoutes } from "./frontend/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="bg-blue-400 dark:bg-neutral-800 dark:text-white min-h-screen ">
			<AllRoutes />
			<ToastContainer />
		</div>
	);
}

export default App;
