import { taskConstants } from "../constants";

const task_Reducer = (state, action) => {
	switch (action.type) {
		case taskConstants.GET_TASK:
		case taskConstants.ADD_TASK:
		case taskConstants.EDIT_TASK:
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
