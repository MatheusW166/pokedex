import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { Categories } from "./models/Categories";

function App() {
	return (
		<div id="app" data-theme="light">
			<PokemonCard {...{ name: "Bulbassaur", order: 1, categories: [Categories.Grass, Categories.Poison], image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" }} />
		</div>
	);
}

export default App;
