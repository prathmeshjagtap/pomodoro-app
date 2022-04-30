import React, { useState } from "react";
import { Navbar, TaskModal } from "../../components";
import { useAuthContext, useTaskContext, useTimerContext } from "../../context";
import {
	PencilAltIcon,
	PlusCircleIcon,
	TrashIcon,
	ClockIcon,
} from "@heroicons/react/solid";
import { deleteTask, EditTask } from "../../services";
import { taskConstants, timeConstants } from "../../constants";
import { useNavigate } from "react-router-dom";

function Tasks() {
	const [modal, setModal] = useState(false);
	const [task, setTask] = useState({
		title: "",
		description: "",
		time: "",
	});
	const {
		authState: { token, userInfo },
	} = useAuthContext();
	const {
		taskState: { tasks },
		taskDispatch,
	} = useTaskContext();
	const userName = userInfo?.firstName || "Guest";

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
	const navigate = useNavigate();
	const { timeDispatch } = useTimerContext();
	return (
		<>
			<div className="h-full">
				<Navbar />
				<div className="w-full flex flex-col items-center h-4/5">
					<div className="w-4/5 h-4/5 mt-8 md:p-8">
						<h2 className="font-semibold text-xl md:text-2xl md:mx-4 text-white ">{`Welcome back ${userName}`}</h2>
						<h3 className="my-4 md:mx-4 md:text-2xl font-medium text-white">
							{tasks && tasks.length === 0
								? " you have 0 task to do start adding Tasks"
								: `You have ${tasks.length} Tasks to Do , All the Best`}
						</h3>
						<div className=" rounded-3xl  bg-white dark:bg-neutral-600 shadow-2xl p-4 md:p-8">
							<div className="flex justify-between">
								<h2 className="font-extrabold text-xl text-center">
									To-Do List
								</h2>
								<PlusCircleIcon
									className="h-10 w-10   text-green-500 cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										setTask("");
										setModal(true);
									}}
								/>
							</div>
							{tasks && tasks.length !== 0 ? (
								<>
									{tasks.map((item) => (
										<div
											key={item._id}
											className="flex justify-between md:p-4 items-center"
										>
											<div className="flex gap-2 items-center ">
												<input
													type="checkbox"
													className="w-4 h-4"
													onChange={() => {
														item.isDone = !item.isDone;
														editTask(item);
													}}
													checked={item.isDone}
												/>
												<p
													className={`text-xl ${
														item.isDone ? "line-through" : null
													}`}
												>
													{item.title}
												</p>
											</div>

											<div className="flex gap-4 ">
												<ClockIcon
													className="w-6 h-6 cursor-pointer"
													onClick={() => {
														timeDispatch({
															type: timeConstants.CHANGE_TIME,
															payload: {
																workMinutes: item.time,
																breakMinutes: 5,
															},
														});
														navigate(`/pomodoro/${item._id}`);
													}}
												/>
												<PencilAltIcon
													className="w-6 h-6 cursor-pointer"
													onClick={(e) => {
														e.preventDefault();
														setTask(item);
														setModal(true);
													}}
												/>
												<TrashIcon
													className="w-6 h-6 cursor-pointer"
													onClick={() =>
														deleteTask(token, item._id, taskDispatch)
													}
												/>
											</div>
										</div>
									))}
								</>
							) : (
								<div>Start Adding you todo's here</div>
							)}
						</div>
					</div>
				</div>
				<TaskModal
					modal={modal}
					setModal={setModal}
					task={task}
					setTask={setTask}
				/>
			</div>
		</>
	);
}

export { Tasks };
