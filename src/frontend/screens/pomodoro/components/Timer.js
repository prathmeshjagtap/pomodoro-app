import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
	PlayIcon,
	PauseIcon,
	CogIcon,
	ChevronRightIcon,
	RefreshIcon,
} from "@heroicons/react/solid";
import { useTimerContext, useTaskContext } from "../../../context";
import { useParams } from "react-router-dom";

function Timer({ setSettingsModal }) {
	const {
		timeState: { workMinutes, breakMinutes },
	} = useTimerContext();

	const { taskId } = useParams();
	const {
		taskState: { tasks },
	} = useTaskContext();

	const getTask = tasks.filter((item) => item._id === taskId);

	const [isPaused, setIsPaused] = useState(true);
	const [secondsLeft, setSecondsLeft] = useState(Number(workMinutes) * 60);
	const [mode, setMode] = useState("work");
	const secondsRef = useRef(secondsLeft);
	const isPausedRef = useRef(isPaused);
	const modeRef = useRef(mode);
	useEffect(() => {
		secondsRef.current =
			mode === "work" ? Number(workMinutes) * 60 : Number(breakMinutes) * 60;
		setSecondsLeft(secondsRef.current);
		const timerId = setInterval(() => {
			if (isPausedRef.current) {
				return;
			}
			if (secondsRef.current === 0) {
				const nextMode = modeRef.current === "work" ? "break" : "work";
				const nextSeconds =
					(nextMode === "work" ? Number(workMinutes) : Number(breakMinutes)) *
					60;
				setMode(nextMode);

				modeRef.current = nextMode;
				setSecondsLeft(nextSeconds);
				secondsRef.current = nextSeconds;
			}

			secondsRef.current--;
			setSecondsLeft(secondsRef.current);
		}, 1000);

		return () => clearInterval(timerId);
	}, [workMinutes, breakMinutes, mode]);

	const totalSeconds =
		mode === "work" ? Number(workMinutes) * 60 : Number(breakMinutes) * 60;
	const percentage = Math.round((secondsLeft / totalSeconds) * 100);
	const minutes = Math.floor(secondsLeft / 60);
	let seconds = secondsLeft % 60;
	if (seconds < 10) {
		seconds = ` 0${seconds}`;
	}

	return (
		<div className="flex flex-col md:flex-row w-full flex-wrap h-full  md:justify-around justify-center items-center">
			<div className="flex h-4/5 flex-col gap-2">
				<div className="">
					<CircularProgressbar
						value={percentage}
						text={minutes + " : " + seconds}
						styles={buildStyles({
							textColor: "#fff",
							pathColor: mode === "work" ? "red" : "green",
							tailColor: "rgba(255,255,255,.2)",
						})}
					/>
				</div>
				<div className="flex justify-center items-center flex-col ">
					<div className="flex justify-center items-center gap-4">
						<RefreshIcon
							className="w-10 h-10  border-indigo-300 text-white  cursor-pointer border-2  dark:border-green-600 rounded-full p-1 "
							onClick={() => {
								secondsRef.current =
									mode === "work"
										? Number(workMinutes) * 60
										: Number(breakMinutes) * 60;
								setSecondsLeft(secondsRef.current);
							}}
						/>
						<span>
							{isPaused ? (
								<PlayIcon
									className="w-12 h-12 text-green-400 cursor-pointer "
									onClick={() => {
										setIsPaused(false);
										isPausedRef.current = false;
									}}
								/>
							) : (
								<PauseIcon
									className="w-12 h-12 cursor-pointer text-green-400"
									onClick={() => {
										setIsPaused(true);
										isPausedRef.current = true;
									}}
								/>
							)}
						</span>
						<ChevronRightIcon
							className="w-10 h-10 cursor-pointer border-2 border-indigo-300 text-white dark:border-green-600 rounded-full"
							onClick={() =>
								setMode((mode) => (mode === "work" ? "break" : "work"))
							}
						/>
					</div>
					<p className="text-center text-2xl my-2">{mode}</p>
					<div
						className="flex  rounded-xl  bg-white dark:bg-neutral-600 shadow-2xl p-2 justify-center items-center  cursor-pointer "
						onClick={() => setSettingsModal((settingsModal) => !settingsModal)}
					>
						<CogIcon className="w-8 h-8" />
						<h2 className="text-xl">Settings</h2>
					</div>
				</div>
			</div>
			{taskId && (
				<div className=" dark:bg-neutral-600 p-4 bg-white md:self-start  mt-4 w-4/5 md:w-2/5 rounded-3xl  shadow-2xl  md:p-8">
					<h2 className="text-3xl font-bold">{getTask[0].title}</h2>
					<p className="text-2xl   mt-8 break-words">
						{getTask[0].description}
					</p>
				</div>
			)}
		</div>
	);
}

export { Timer };
