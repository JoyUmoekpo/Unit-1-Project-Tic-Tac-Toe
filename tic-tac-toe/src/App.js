import { useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
	const string = "Welcome to my Tic Tac Toe application!";

	const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState(true);

	const handleClick = () =>{
		setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
	}

	return (
		<div className="App">
			<div className="container">
				{squares.map((value, index) => {
					<Square
						squares={squares}
						setSquares={setSquares}
						index={index}
						squareValue={value}
						player={player}
						setPlayer={setPlayer}
					/>;
				})}
			</div>
			<button onClick={handleClick}>Reset</button>
		</div>
	);
}

export default App;
