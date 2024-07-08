import { useState } from "react";
import "./App.scss";

import Header from "./Components/Header/Header.jsx";
import Pages from "./Components/Pages/Pages.jsx";

function App() {
	const [count, setCount] = useState(5);
	// const [] = useState();

	return (
		<div className="wrapper">
			<Header />
			<Pages />
		</div>
	);
}

export default App;
