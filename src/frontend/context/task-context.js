import { useContext, createContext, useReducer, useEffect } from "react";
import { task_Reducer } from "../reducers";
import { useAuthContext } from "./auth-context";
import { getTask } from "../services";

const taskContext = createContext(null);

const useTaskContext = () => useContext(taskContext);

function TaskProvider({ children }) {
	const [taskState, taskDispatch] = useReducer(task_Reducer, {
		tasks: [],
	});
	const {
		authState: { token },
	} = useAuthContext();

	useEffect(() => {
		if (token) {
			getTask(token, taskDispatch);
		}
	}, [token]);
	return (
		<taskContext.Provider value={{ taskState, taskDispatch }}>
			{children}
		</taskContext.Provider>
	);
}

export { TaskProvider, useTaskContext };
