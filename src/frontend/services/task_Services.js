import axios from "axios";
import { taskConstants } from "../constants";

const getTask = async (token, dispatch) => {
	try {
		const response = await axios.get("/api/habits", {
			headers: {
				authorization: token,
			},
		});
		dispatch({
			type: taskConstants.GET_TASK,
			payload: response.data.habits,
		});
	} catch (error) {
		console.error(error);
	}
};
const AddTask = async (token, task) => {
	try {
		const response = await axios.post(
			"/api/habits",
			{
				habit: { ...task, isDone: false },
			},

			{
				headers: {
					authorization: token,
				},
			}
		);
		return response.data.habits;
	} catch (error) {
		console.error(error);
	}
};

const EditTask = async (token, habit) => {
	try {
		const response = await axios.post(
			`/api/habits/${habit._id}`,
			{
				habit: habit,
			},

			{
				headers: {
					authorization: token,
				},
			}
		);
		return response.data.habits;
	} catch (error) {
		console.error(error);
	}
};
const deleteTask = async (token, id, dispatch) => {
	try {
		const response = await axios.delete(`/api/habits/${id}`, {
			headers: {
				authorization: token,
			},
		});
		dispatch({
			type: taskConstants.DELETE_TASK,
			payload: response.data.habits,
		});
	} catch (error) {
		console.error(error);
	}
};
export { getTask, AddTask, EditTask, deleteTask };
