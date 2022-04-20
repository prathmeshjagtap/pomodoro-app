import { taskConstants } from "../constants";

const task_Reducer = (state, action) => {
	switch (action.type) {
		case taskConstants.GET_TASK:
			return {
				...state,
				tasks: action.payload,
			};
		case taskConstants.ADD_TASK:
			return {
				...state,
				tasks: action.payload,
			};
		case taskConstants.EDIT_TASK:
			return {
				...state,
				tasks: action.payload,
			};
		case taskConstants.DELETE_TASK:
			return {
				...state,
				tasks: action.payload,
			};

		default:
			return state;
	}
};

export { task_Reducer };
