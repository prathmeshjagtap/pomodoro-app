import React, { useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyle } from "../../utils";
import { useAuthContext } from "../../context";
import { authConstants } from "../../constants";
import { useTheme } from "../../hooks";

function Navbar() {
	const navigate = useNavigate();
	let Links = [
		{ name: "Tasks", link: "/tasks" },
		{ name: "Pomodoro", link: "/pomodoro" },
	];
	const [mobileNav, setMobileNav] = useState(false);
	const [colorTheme, setTheme] = useTheme();
	const {
		authState: { token },
		authDispatch,
	} = useAuthContext();
	const { pathname } = useLocation();
	const logoutHandler = (dispatch) => {
		localStorage.removeItem("token");
		dispatch({
			type: authConstants.LOGOUT,
		});
		navigate("/");
		toast.success("Logout Successfully ", toastStyle);
	};
	return (
		<div className="shadow-md w-full sticky top-0 left-0 md:flex justify-around  items-center bg-white  py-4 md:px-10 px-7 text-lg font-medium dark:bg-neutral-700 dark:text-white transition-all duration-300 ease-in">
			<Link to="/">
				<h2 className="font-bold hover:text-green-500 ">✅ Tomato</h2>
			</Link>
			<div className=" absolute flex right-8 top-4 cursor-pointer md:hidden">
				{colorTheme === "light" ? (
					<SunIcon
						className="block h-8 w-8 mr-4 md:hidden self-center"
						onClick={() => setTheme(colorTheme)}
					/>
				) : (
					<MoonIcon
						className="block h-8 w-8 mr-4 md:hidden self-center "
						onClick={() => setTheme(colorTheme)}
					/>
				)}
				{mobileNav ? (
					<XIcon
						className="h-8 w-8"
						onClick={() => setMobileNav((mobileNav) => !mobileNav)}
					/>
				) : (
					<MenuIcon
						className="h-8 w-8"
						onClick={() => setMobileNav((mobileNav) => !mobileNav)}
					/>
				)}
			</div>
			<ul
				className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9   bg-white dark:bg-neutral-700 dark:text-white transition-all duration-300 ease-in  ${
					mobileNav ? "top-10 " : "top-[-470px]"
				}`}
			>
				{Links.map((link) => (
					<li key={link.name} className="md:ml-8 text-l md:my-0 my-7 ">
						<Link to={link.link} className=" hover:text-green-500 duration-500">
							{link.name}
						</Link>
					</li>
				))}
				{!matchPath("/", pathname) ? (
					<li className="md:ml-8 text-l md:my-0 my-7 ">
						<Link
							to="/userProfile"
							className="hover:text-green-500 duration-500"
						>
							User Profile
						</Link>
					</li>
				) : null}
				{token ? (
					<li
						className="md:ml-8 text-l md:my-0 my-7 "
						onClick={(e) => {
							e.preventDefault();
							logoutHandler(authDispatch);
						}}
					>
						<p className="hover:text-green-500 duration-500 ">Logout</p>
					</li>
				) : (
					<li className="md:ml-8 text-l md:my-0 my-7 bg-white ">
						<Link to="/login" className=" hover:text-green-500 duration-500">
							Login
						</Link>
					</li>
				)}
				{colorTheme === "light" ? (
					<SunIcon
						className="hidden h-6 w-6 ml-10 md:block "
						onClick={() => setTheme(colorTheme)}
					/>
				) : (
					<MoonIcon
						className="hidden h-6 w-6 ml-10 md:block "
						onClick={() => setTheme(colorTheme)}
					/>
				)}
			</ul>
		</div>
	);
}

export { Navbar };
