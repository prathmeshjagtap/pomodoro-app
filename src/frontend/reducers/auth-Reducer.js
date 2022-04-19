import { authConstants } from "../constants";
const auth_Reducer = (state, action) => {
	switch (action.type) {
		case authConstants.AUTHENTICATION:
			return {
				...state,
				token: action.payload.token,
				userInfo: action.payload.userInfo,
			};
		case authConstants.LOGOUT:
			return { ...state, token: null, userInfo: null };
		default:
			return state;
	}
};

export { auth_Reducer };
