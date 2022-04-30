import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { useTimerContext } from "../../../context";
import { timeConstants } from "../../../constants";

function SettingsModal({ settingsModal, setSettingsModal }) {
	const {
		timeState: { workMinutes, breakMinutes },
		timeDispatch,
	} = useTimerContext();
	const [workTime, setWorkTime] = useState(workMinutes);
	const [breakTime, setBreakTime] = useState(breakMinutes);

	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
				<div className="relative  max-w-sm rounded-lg bg-white p-4 dark:bg-neutral-600  ">
					<XIcon
						className="w-6 h-6 relative left-28 cursor-pointer"
						onClick={() => setSettingsModal((settingsModal) => !settingsModal)}
					/>
					<ul className="list-none">
						<li className="flex flex-col">
							<label className="my-2">{`Work Time : ${workTime} `}</label>
							<input
								name="workTime"
								type="range"
								min="1"
								max="60"
								value={workTime}
								onChange={(e) => setWorkTime(e.target.value)}
							/>
						</li>
						<li className="flex flex-col mb-4">
							<label className="my-2">{`Break Time : ${breakTime} `}</label>
							<input
								name="breakTime"
								type="range"
								min="0"
								max="30"
								value={breakTime}
								onChange={(e) => setBreakTime(e.target.value)}
							/>
						</li>
					</ul>
					<button
						type="button"
						className="bg-green-500 p-2  w-full  text-sm font-bold text-white rounded-md hover:bg-green-400"
						onClick={() => {
							timeDispatch({
								type: timeConstants.CHANGE_TIME,
								payload: { workMinutes: workTime, breakMinutes: breakTime },
							});
							setSettingsModal((settingsModal) => !settingsModal);
						}}
					>
						Edit Time
					</button>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
}

export { SettingsModal };
