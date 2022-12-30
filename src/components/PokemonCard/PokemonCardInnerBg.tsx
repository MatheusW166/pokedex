import clsx from "clsx";
import { Categories } from "../../models/Categories";
import { PokemonTypeBg } from "../PokemonTypeItems/PokemonTypeItems";

interface PokemonCardInnerBgProps {
  category: Categories;
}

export function PokemonCardInnerBg({ category }: PokemonCardInnerBgProps) {
  console.log(category);
  return (
    <div className={clsx("inner-bg", category)}>
      <div className="type-circle"></div>
      <div className="type-circle-mask">
        <div className="masked-item">
          <PokemonTypeBg category={category} />
        </div>
      </div>
    </div>
  );
}