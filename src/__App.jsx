import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

import { ReactSVG } from "react-svg";

import Header from "./Components/Input.jsx";

const showAlert = () => {
	alert("GGWP");
};

function App() {
	const [count, setCount] = useState(5);
	// const [] = useState();

	return (
		<>
			<Header />
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				{/* <a href="https://react.dev" target="_blank"> */}
				<ReactSVG
					afterInjection={(svg) => {
						console.log(svg);
					}}
					beforeInjection={(svg) => {
						svg.classList.add("svg-class-name");
						svg.setAttribute("style", "width: 201px");
					}}
					onClick={() => {
						console.log("wrapper onClick");
						showAlert();
					}}
					src="/react.svg"
				/>
				{/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
				{/* </a> */}
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
