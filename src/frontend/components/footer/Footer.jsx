import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="bg-blue-400  dark:bg-neutral-700 text-white h-80 flex justify-around pt-12">
			<div className="flex flex-col p-4">
				<Link
					to="/"
					className="font-bold text-3xl hover:text-black dark:hover:text-green-400"
				>
					✅ Tomato
				</Link>
				<div>
					<div className="text-2xl my-4">Made with 💙 by Prathmesh Jagtap</div>
					<div className="text-4xl flex gap-4 justify-between ">
						<a href="https://www.instagram.com/prathmesh_jagtap_/">
							<i className="fab fa-instagram hover:text-black dark:hover:text-green-400"></i>
						</a>
						<a href="https://www.linkedin.com/in/prathmeshjagtap/">
							<i className="fab fa-linkedin hover:text-black dark:hover:text-green-400 "></i>
						</a>

						<a href="https://twitter.com/prathmesh_20">
							<i className="fab fa-twitter-square hover:text-black dark:hover:text-green-400"></i>
						</a>
						<a href="https://github.com/prathmeshjagtap/pomodoro-app">
							<i className="fab fa-github-square hover:text-black dark:hover:text-green-400"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="md:block hidden ">
				<h6 className="text-2xl font-bold my-4">Sitemap</h6>
				<ul className="flex flex-col gap-4 ">
					<li className="dark:hover:text-green-400  hover:text-black font-semibold text-xl">
						<Link className="footer__link" to="/">
							Home
						</Link>
					</li>

					<li className="dark:hover:text-green-400  hover:text-black font-semibold text-xl">
						<Link className="footer__link" to="/tasks">
							Task Page
						</Link>
					</li>
					<li className="dark:hover:text-green-400  hover:text-black font-semibold text-xl">
						<Link className="footer__link" to="/pomodoro">
							Pomodoro
						</Link>
					</li>
				</ul>
			</div>
			<div className="md:block hidden ">
				<h6 className="text-2xl font-bold my-4">General</h6>
				<ul className="flex flex-col gap-4 ">
					<li className="dark:hover:text-green-400  hover:text-black font-semibold text-xl">
						<Link to="/">Privacy Policy</Link>
					</li>
					<li className="dark:hover:text-green-400  hover:text-black font-semibold text-xl">
						<Link to="/">Terms of use</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export { Footer };
