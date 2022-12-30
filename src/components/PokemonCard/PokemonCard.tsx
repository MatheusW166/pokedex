import { Grass } from "../Categories/Grass";
import { Categories } from "../../models/Categories";
import { Pokemon } from "../../models/Pokemon";
import { TypeBreadCup } from "../TypeBreadCup/TypeBradcup";

interface PokemonCardProps {
	pokemon: Pokemon;
	className?: string;
	style?: React.CSSProperties;
}

export function PokemonCard({ pokemon, className, style }: PokemonCardProps) {
	return (
		<article className={`pokemon-card ${className}`} style={style}>
			<div className="pokemon-img">
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt={pokemon.name} />
			</div>
			<div className="inner-bg"></div>
			<div className="types">
				<div className="type-icon">
					<Grass />
				</div>
				<div className="type-names">
					<TypeBreadCup type={Categories.Grass} />
					<TypeBreadCup type={Categories.Poison} />
				</div>
			</div>
			<div className="characteristics">
				<p>Nº 001</p>
				<h2>{pokemon.name}</h2>
			</div>
		</article>
	);
}
