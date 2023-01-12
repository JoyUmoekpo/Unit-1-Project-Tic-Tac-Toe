import { useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
	const string = "Welcome to my Tic Tac Toe application!";

	const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState(true);

	return (
		<div className="App">
			<Square propVar={string} />
			<Square
				squares={squares}
				setSquares={setSquares}
				player={player}
				setPlayer={setPlayer}
			/>
		</div>
	);
}

export default App;
