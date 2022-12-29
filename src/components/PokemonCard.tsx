import { Pokemon } from "../models/Pokemon";

interface PokemonCardProps {
	pokemon: Pokemon;
	className?: string;
	style?: React.CSSProperties;
}

export function PokemonCard({ pokemon, className, style }: PokemonCardProps) {
	return (
		<div className={className} style={style}>
			<h1>{pokemon.name}</h1>
		</div>
	);
}
