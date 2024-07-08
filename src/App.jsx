import { useState } from "react";
import "./App.scss";

import Pages from "./Components/Pages/Pages.jsx";

function App() {
	const [count, setCount] = useState(5);
	// const [] = useState();

	return (
		<div className="wrapper">
			<Pages />
		</div>
	);
}

export default App;
