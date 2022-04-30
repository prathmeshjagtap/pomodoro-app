import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { useAuthContext, useTaskContext } from "../../context";
import { taskConstants } from "../../constants";
import { AddTask, EditTask } from "../../services";

function TaskModal({ modal, setModal, task, setTask }) {
	const { taskDispatch } = useTaskContext();
	const {
		authState: { token },
	} = useAuthContext();
	const handleChange = (e) => {
		e.preventDefault();
		setTask({
			...task,
			[e.target.name]: e.target.value,
		});
	};

	const addTask = async (token, task) => {
		try {
			const data = await AddTask(token, task);
			taskDispatch({ type: taskConstants.ADD_TASK, payload: data });
		} catch (error) {
			console.log(error);
		}
		setModal(false);
		setTask("");
	};
	const editTask = async (task) => {
		try {
			const data = await EditTask(token, task);
			taskDispatch({ type: taskConstants.EDIT_TASK, payload: data });
		} catch (error) {
			console.log(error);
		}
		setModal(false);
		setTask("");
	};
	return (
		<>
			{modal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
						<form
							className="relative  max-w-sm rounded-lg bg-white p-4 dark:bg-neutral-600  "
							onSubmit={(e) => {
								e.preventDefault();

								task._id ? editTask(task) : addTask(token, task);
							}}
						>
							<XIcon
								className="w-6 h-6 relative left-60 cursor-pointer"
								onClick={() => setModal((modal) => !modal)}
							/>
							<input
								name="title"
								placeholder="Add Title"
								type="text"
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 my-4 dark:text-black"
								onChange={handleChange}
								value={task.title || ""}
								required
							/>
							<textarea
								name="description"
								id="taskDescription"
								cols="30"
								rows="30"
								placeholder="Add Description"
								className="bg-gray-200 border-gray-300  rounded-md px-3 py-2 dark:text-black"
								onChange={handleChange}
								value={task.description || ""}
								required
							></textarea>
							<input
								name="time"
								type="number"
								min="1"
								max="60"
								placeholder="Add Time in Minutes"
								className="appearance-none block w-full px-3 py-2 border dark:text-black border-gray-300 rounded-md bg-gray-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 my-4"
								onChange={handleChange}
								value={task.time || ""}
								required
							/>
							<div className="flex justify-between">
								<button
									className=" bg-green-200 p-2 w-2/5  border-green-500 border   text-sm font-bold text-green-600 rounded-md hover:bg-green-400 hover:text-white "
									onClick={() => setModal((modal) => !modal)}
								>
									Cancel
								</button>

								<button
									type="submit"
									className="bg-green-500 p-2 w-2/5  text-sm font-bold text-white rounded-md hover:bg-green-400"
								>
									{task._id ? "Edit" : "Add"}
								</button>
							</div>
						</form>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}

export { TaskModal };
