import { TypeBreadCup } from "../TypeBreadCup/TypeBradcup";
import { Categories } from "../../models/Categories";
import { PokemonTypeIcon } from "../PokemonTypeItems/PokemonTypeItems";
import { PokemonCardInnerBg } from "./PokemonCardInnerBg";
import { clsx } from "clsx";
import "../../helpers/number.extensions";

interface PokemonCardProps {
  name: string;
  image: string;
  categories: Categories[];
  order: number;
}

interface PokemonCardImgProps {
  img: string;
  hasShadow?: boolean;
  className?: string;
}

interface PokemonCardCategoriesBreadCupsProps {
  categories: Categories[];
}

function PokemonCardImg({
  img,
  className,
  hasShadow = true
}: PokemonCardImgProps) {
  return (
    <div className={clsx("pokemon-img", hasShadow && "shadow", className)}>
      <img src={img}></img>
    </div>
  );
}

function PokemonCardCategoriesBreadCups({
  categories
}: PokemonCardCategoriesBreadCupsProps) {
  return (
    <>
      {categories.map((name, idx) => (
        <TypeBreadCup key={idx} type={name} />
      ))}
    </>
  );
}

function PokemonCard({ image, categories, name, order }: PokemonCardProps) {
  return (
    <article className="pokemon-card">
      <PokemonCardImg img={image} />
      <PokemonCardInnerBg category={categories[0]} />
      <div className="types">
        <div className="type-icon">
          <PokemonTypeIcon category={categories[0]} />
        </div>
        <div className="type-names">
          <PokemonCardCategoriesBreadCups categories={categories} />
        </div>
      </div>
      <div className="characteristics">
        <p>Nº {order.padStart(3, "0")}</p>
        <h2>{name.initCap()}</h2>
      </div>
    </article>
  );
}

export { PokemonCard, PokemonCardCategoriesBreadCups, PokemonCardImg };
