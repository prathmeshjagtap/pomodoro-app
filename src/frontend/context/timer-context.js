import { useContext, createContext, useReducer } from "react";
import { time_Reducer } from "../reducers";

const timerContext = createContext(null);

const useTimerContext = () => useContext(timerContext);

function TimerProvider({ children }) {
	const [timeState, timeDispatch] = useReducer(time_Reducer, {
		workMinutes: 25,
		breakMinutes: 5,
	});
	return (
		<timerContext.Provider value={{ timeState, timeDispatch }}>
			{children}
		</timerContext.Provider>
	);
}

export { TimerProvider, useTimerContext };
