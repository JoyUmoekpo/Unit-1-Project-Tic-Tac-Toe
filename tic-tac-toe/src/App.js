import Square from "./Square";
import "./App.css";

function App() {
	
	const string = "Welcome to my application!";

	return (
		<div className="App">
			<Square propVar={string}/>
		</div>
	);
}

export default App;  