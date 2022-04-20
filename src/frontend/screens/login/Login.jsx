import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import loginImg from "../../assets/loginImg.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "../../utils";
import { useAuthContext } from "../../context";
import { authConstants } from "../../constants";

function Login() {
	const [userDetail, setUserDetail] = useState({
		email: "",
		password: "",
	});
	const { authDispatch } = useAuthContext();
	const navigate = useNavigate();
	const location = useLocation();
	const handleChange = (e) => {
		setUserDetail({
			...userDetail,
			[e.target.name]: e.target.value,
		});
	};
	let from = location.state?.from?.pathname || "/";
	const loginHandler = async (email, password, dispatch) => {
		try {
			const response = await axios.post(`/api/auth/login`, {
				email,
				password,
			});

			localStorage.setItem("token", response.data.encodedToken);
			dispatch({
				type: authConstants.AUTHENTICATION,
				payload: {
					token: response.data.encodedToken,
					userInfo: response.data.foundUser,
				},
			});
			toast.success("Logged in Successfully ", toastStyle);
			navigate(from, { replace: true });
		} catch (error) {
			if (error.response.status === 404) {
				toast.error("Wrong Email", toastStyle);
			} else if (error.response.status === 401) {
				toast.error("Invalid Credentials", toastStyle);
			} else {
				toast.error("Server Error", toastStyle);
			}
		}
	};
	return (
		<div className="flex justify-center items-center  w-full h-screen">
			<div className="flex items-center justify-around shadow-2xl dark:bg-neutral-700 rounded-md bg-white ">
				<div className="hidden md:block  h-1/2 w-1/2 p-4 ">
					<img
						className="h-full w-full bg-cover "
						src={loginImg}
						alt="loginImage"
					/>
				</div>
				<div className="p-2 m-1 ">
					<div className="sm:mx-auto sm:w-full sm:max-w-md ">
						<Link to="/" className="flex justify-center font-bold text-3xl">
							✅ Tomato
						</Link>

						<h2 className="mt-4 text-2xl font-semibold text-center leading-9">
							Sign in to your account
						</h2>

						<p className="mt-1  text-sm text-center leading-5 max-w">
							Or
							<Link to="/signup" className="font-medium transition m-1">
								create a new account
							</Link>
						</p>
					</div>
					<form
						className="mt-4 sm:mx-auto sm:w-full sm:max-w-md"
						onSubmit={(e) => {
							e.preventDefault();
							loginHandler(userDetail.email, userDetail.password, authDispatch);
						}}
					>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-5"
							>
								Email address
							</label>

							<div className="mt-1 rounded-md shadow-sm">
								<input
									id="email"
									type="email"
									required
									autoFocus
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									placeholder="test@gmail.com"
									name="email"
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="mt-6">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 leading-5 dark:text-white"
							>
								Password
							</label>

							<div className="mt-1 rounded-md shadow-sm">
								<input
									id="password"
									type="password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									name="password"
									onChange={handleChange}
									autoComplete="on"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between mt-6">
							<div className="flex items-center">
								<input
									id="remember"
									type="checkbox"
									className="form-checkbox w-4 h-4 transition duration-150 ease-in-out"
								/>
								<label
									htmlFor="remember"
									className="block ml-2 text-sm text-gray-900 leading-5 dark:text-white"
								>
									Remember
								</label>
							</div>

							<div className="text-sm leading-5">
								<Link
									to="/"
									className="font-medium transition ease-in-out duration-150"
								>
									Forgot your password?
								</Link>
							</div>
						</div>

						<div className="mt-6">
							<span className="block w-full rounded-md shadow-sm">
								<button
									type="submit"
									className="p-2 bg-green-500 w-full  text-sm font-bold text-white rounded-md hover:bg-green-400 "
								>
									Sign in
								</button>
								<button
									type="button"
									className="mt-1 p-2 border-green-400 w-full  text-sm font-bold text-green-600 rounded-md border-2 bg-green-100"
									onClick={(e) => {
										e.preventDefault();
										loginHandler("test@gmail.com", "test@1234", authDispatch);
									}}
								>
									Guest Login
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export { Login };
