import { TypeBreadCup } from "../TypeBreadCup";
import { Categories } from "../../models/Categories";
import { PokemonTypeIcon } from "../PokemonTypeItems";
import { PokemonCardInnerBg } from "./PokemonCardInnerBg";
import { clsx } from "clsx";
import { useObserveElementResize } from "../../hooks/useObserveElementResize";
import { getPercentualSize } from "../../utils/pokemonCardUtils";
import "../../helpers/number.extensions";
import { playAnimation } from "../../utils/playAnimation";
import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";

interface PokemonCardProps {
  name: string;
  image: string;
  categories: Categories[];
  order: number;
  appearOrder: number;
}

interface PokemonCardImgProps {
  img: string;
  hasShadow?: boolean;
  className?: string;
}

interface PokemonCardCategoriesBreadCupsProps {
  categories: Categories[];
  style?: React.CSSProperties;
}

function PokemonCardImg({ img, className, hasShadow = true }: PokemonCardImgProps) {
  const loadContext = useContext(LoadingContext);
  return (
    <div className={clsx("pokemon-img", hasShadow && "shadow", className)}>
      <img src={img} onLoad={loadContext?.onLoad}></img>
    </div>
  );
}

function PokemonCardCategoriesBreadCups({
  categories,
  style
}: PokemonCardCategoriesBreadCupsProps) {
  return (
    <>
      {categories.map((name, idx) => (
        <TypeBreadCup key={idx} type={name} style={style} />
      ))}
    </>
  );
}

function PokemonCard({ image, categories, name, order, appearOrder }: PokemonCardProps) {
  const { size, ref } = useObserveElementResize<HTMLElement>();

  playAnimation(ref);
  return (
    <article
      style={{ animationDelay: `${(appearOrder + 1) * 0.1}s` }}
      ref={ref}
      className="pokemon-card"
    >
      <PokemonCardImg img={image} />
      <PokemonCardInnerBg category={categories[0]} />
      <div className="types">
        <div className="type-icon">
          <PokemonTypeIcon
            style={{
              width: getPercentualSize({
                percent: 0.085,
                baseSize: size.width,
                minSize: 22,
                maxSize: 32
              }),
              height: getPercentualSize({
                percent: 0.085,
                baseSize: size.width,
                minSize: 22,
                maxSize: 32
              })
            }}
            category={categories[0]}
          />
        </div>
        <div className="type-names">
          <PokemonCardCategoriesBreadCups
            style={{
              fontSize: getPercentualSize({
                percent: 0.04,
                baseSize: size.width,
                minSize: 10,
                maxSize: 16
              }),
              lineHeight: getPercentualSize({ percent: 0.005, baseSize: size.width }) / 2
            }}
            categories={categories}
          />
        </div>
      </div>
      <div className="characteristics">
        <p
          style={{
            fontSize: getPercentualSize({
              percent: 0.048,
              baseSize: size.width,
              minSize: 12,
              maxSize: 16
            })
          }}
        >
          Nº {order.padStart(3, "0")}
        </p>
        <h2
          style={{
            fontSize: getPercentualSize({
              percent: 0.065,
              baseSize: size.width,
              minSize: 14,
              maxSize: 22
            })
          }}
        >
          {name.initCap()}
        </h2>
      </div>
    </article>
  );
}

export { PokemonCard, PokemonCardCategoriesBreadCups, PokemonCardImg };
