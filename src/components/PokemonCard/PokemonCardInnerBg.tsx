import { Categories } from "../../models/Categories";
import { PokemonTypeBg } from "../PokemonTypeItems/PokemonTypeItems";
import clsx from "clsx";

interface PokemonCardInnerBgProps {
  category: Categories;
}

export function PokemonCardInnerBg({ category }: PokemonCardInnerBgProps) {
  return (
    <div className="inner-bg">
      <div className={clsx("type-circle", category)}></div>
      <div className="type-circle-mask">
        <div className="masked-item">
          <PokemonTypeBg category={category} />
        </div>
      </div>
    </div>
  );
}