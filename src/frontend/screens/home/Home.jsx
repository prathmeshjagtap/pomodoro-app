import React from "react";
import { Navbar } from "../../components";
import banner from "../../assets/banner.jpg";

function Home() {
	return (
		<div>
			<Navbar />
			<div>
				<img
					className="bg-no-repeat bg-cover w-full h-full "
					src={banner}
					alt="Banner"
				/>
			</div>
		</div>
	);
}

export { Home };
