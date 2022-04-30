import { timeConstants } from "../constants";

const time_Reducer = (state, action) => {
	switch (action.type) {
		case timeConstants.CHANGE_TIME:
			return {
				...state,
				workMinutes: action.payload.workMinutes,
				breakMinutes: action.payload.breakMinutes,
			};
		default:
			return state;
	}
};

export { time_Reducer };
