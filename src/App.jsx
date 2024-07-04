import { useState } from "react";
import "./App.css";

import Header from "./Components/Input.jsx";

function App() {
	const [count, setCount] = useState(5);
	// const [] = useState();

	return (
		<>
			<Header />
		</>
	);
}

export default App;
