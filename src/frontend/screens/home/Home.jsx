import React from "react";
import { Footer, Navbar } from "../../components";
import banner from "../../assets/banner.jpg";
import taskSvg from "../../assets/taskSvg.svg";
import timeSvg from "../../assets/timeSvg.svg";
import progressSvg from "../../assets/progressSvg.svg";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="bg-white  dark:bg-neutral-800 dark:text-white">
			<Navbar />
			<div className="relative w-screen flex flex-col">
				<div className="text-center pt-8  sm:text-black sm:absolute sm:top-1/4  self-center  ">
					<h2 className="font-extrabold text-2xl m-4 ">
						Increase your efficiency unlock your full potential
					</h2>
					<p className=" text-xl m-4 ">
						Focus on what matters and get things done faster and better
					</p>
					<Link to="/tasks">
						<button className="p-2 bg-green-500   text-sm font-bold text-white rounded-md hover:bg-green-400 md:w-1/5 m-4">
							Get Started
						</button>
					</Link>
				</div>
				<img
					className="bg-no-repeat bg-cover w-full h-full "
					src={banner}
					alt="Banner"
				/>
			</div>
			<div className="text-center mt-4">
				<h2 className="font-bold text-2xl">How it Works ?</h2>
				<p className="text-xl m-2 ">
					The Pomodoro Technique is a time management method that can be used
					for any task.
				</p>
				<ul className="flex flex-col md:mt-8 md:flex-row justify-center items-center w-screen gap-4">
					<li className="w-full md:w-1/3 flex flex-col justify-center items-center p-4">
						<img src={taskSvg} className="w-2/3 h-72" alt="task" />
						<h2 className="font-bold text-xl m-2">Add your Tasks</h2>
						<p className="text-center w-2/3">
							Add you task to keep track of it and manage according to your need
						</p>
					</li>
					<li className="w-full md:w-1/3 flex flex-col justify-center items-center p-4">
						<img src={timeSvg} className="w-2/3 h-72" alt="time" />
						<h2 className="font-bold text-xl m-2">
							Work on you task with timer
						</h2>
						<p className="text-center w-2/3">
							Work on your tasks with the Pomodoro Feature
						</p>
					</li>
					<li className="w-full md:w-1/3 flex flex-col justify-center items-center p-4">
						<img
							src={progressSvg}
							className="w-2/3 h-72"
							alt="
							progress"
						/>
						<h2 className="font-bold text-xl m-2">Get work done faster</h2>
						<p className="text-center w-2/3">
							use Pomodro Timer with task to focus on one thing at a time and
							get the work done
						</p>
					</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}

export { Home };
