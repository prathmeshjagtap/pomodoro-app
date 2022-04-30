import React, { useState } from "react";
import { Navbar } from "../../components";
import { SettingsModal } from "./components/SettingsModal";
import { Timer } from "./components/Timer";

function Pomodoro() {
	const [settingsModal, setSettingsModal] = useState(false);

	return (
		<>
			<Navbar />
			<div className="flex justify-center items-center mt-16">
				{settingsModal ? (
					<SettingsModal
						settingsModal={settingsModal}
						setSettingsModal={setSettingsModal}
					/>
				) : (
					<Timer setSettingsModal={setSettingsModal} />
				)}
			</div>
		</>
	);
}

export { Pomodoro };
