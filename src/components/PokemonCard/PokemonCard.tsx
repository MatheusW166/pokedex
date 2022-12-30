import { Pokemon } from "../../models/Pokemon";
import { TypeBreadCup } from "../TypeBreadCup/TypeBradcup";
import { Categories } from "../../models/Categories";
import { PokemonTypeIcon } from "../PokemonTypeItems/PokemonTypeItems";
import { PokemonCardInnerBg } from "./PokemonCardInnerBg";
import { clsx } from "clsx";
import "../../helpers/number.extensions";

interface PokemonCardProps {
	pokemon: Pokemon;
}

interface PokemonCardImgProps {
	img: string;
	hasShadow?: boolean;
	className?: string;
}

interface PokemonCardCategoriesBreadCupsProps {
	categories: Categories[];
}

function PokemonCardImg({ img, className, hasShadow = true }: PokemonCardImgProps) {
	return (
		<div className={clsx("pokemon-img", hasShadow && "shadow", className,)}>
			<img src={img}></img>
		</div >
	);
}

function PokemonCardCategoriesBreadCups({ categories }: PokemonCardCategoriesBreadCupsProps) {
	return (
		<>
			{categories.map((name, idx) => <TypeBreadCup key={idx} type={name} />)}
		</>
	);
}


function PokemonCard({ pokemon }: PokemonCardProps) {
	const { image, categories, name, order } = pokemon;
	const firstSlotCategorie = categories[0];
	return (
		<article className="pokemon-card">
			<PokemonCardImg img={image} />
			<PokemonCardInnerBg category={firstSlotCategorie} />
			<div className="types">
				<div className="type-icon">
					<PokemonTypeIcon category={firstSlotCategorie} />
				</div>
				<div className="type-names">
					<PokemonCardCategoriesBreadCups categories={categories} />
				</div>
			</div>
			<div className="characteristics">
				<p>Nº {order.padStart(3, "0")}</p>
				<h2>{name}</h2>
			</div>
		</article>
	);
}

export { PokemonCard, PokemonCardCategoriesBreadCups, PokemonCardImg };
