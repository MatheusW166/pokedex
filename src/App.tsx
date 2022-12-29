import { PokemonCard } from "./components/PokemonCard";

function App() {
	return (
		<div id="app" data-theme="light">
			<PokemonCard pokemon={{ name: "Bulbassaur", order: 1, categories: [], image: "" }} />
		</div>
	);
}

export default App;
