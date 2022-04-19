import { useContext, createContext, useReducer } from "react";
import { auth_Reducer } from "../reducers";

const authContext = createContext(null);

const useAuthContext = () => useContext(authContext);

function AuthProvider({ children }) {
	const localstoragetoken = localStorage.getItem("token");

	const [authState, authDispatch] = useReducer(auth_Reducer, {
		token: localstoragetoken ? localstoragetoken : false,
		userInfo: null,
	});

	return (
		<authContext.Provider value={{ authState, authDispatch }}>
			{children}
		</authContext.Provider>
	);
}

export { AuthProvider, useAuthContext };
