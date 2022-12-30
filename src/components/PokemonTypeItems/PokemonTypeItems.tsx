import { Grass, GrassBg } from "../Categories/Grass";
import { Bug, BugBg } from "../Categories/Bug";
import { Dark, DarkBg } from "../Categories/Dark";
import { Dragon, DragonBg } from "../Categories/Dragon";
import { Electric, ElectricBg } from "../Categories/Electric";
import { Fairy, FairyBg } from "../Categories/Fairy";
import { Ghost, GhostBg } from "../Categories/Ghost";
import { Ice, IceBg } from "../Categories/Ice";
import { Ground, GroundBg } from "../Categories/Ground";
import { Rock, RockBg } from "../Categories/Rock";
import { Fighting, FightingBg } from "../Categories/Fighting";
import { Normal, NormalBg } from "../Categories/Normal";
import { Psychic, PsychicBg } from "../Categories/Psychic";
import { Poison, PoisonBg } from "../Categories/Poison";
import { Water, WaterBg } from "../Categories/Water";
import { Fire, FireBg } from "../Categories/Fire";
import { Steel, SteelBg } from "../Categories/Steel";
import { Flying, FlyingBg } from "../Categories/Flying";
import { Categories } from "../../models/Categories";

interface PokemonTypeIconProps {
  category: Categories;
  style?: React.CSSProperties;
}

interface PokemonTypeBgProps {
  category: Categories;
  style?: React.CSSProperties;
}

export function PokemonTypeBg({ category, style, ...props }: PokemonTypeBgProps) {
  let element = <NormalBg style={style} {...props} />;
  switch (category) {
    case Categories.Grass:
      element = <GrassBg style={style} {...props} />;
      break;
    case Categories.Bug:
      element = <BugBg style={style} {...props} />;
      break;
    case Categories.Dark:
      element = <DarkBg style={style} {...props} />;
      break;
    case Categories.Dragon:
      element = <DragonBg style={style} {...props} />;
      break;
    case Categories.Electric:
      element = <ElectricBg style={style} {...props} />;
      break;
    case Categories.Fairy:
      element = <FairyBg style={style} {...props} />;
      break;
    case Categories.Ghost:
      element = <GhostBg style={style} {...props} />;
      break;
    case Categories.Ice:
      element = <IceBg style={style} {...props} />;
      break;
    case Categories.Ground:
      element = <GroundBg style={style} {...props} />;
      break;
    case Categories.Rock:
      element = <RockBg style={style} {...props} />;
      break;
    case Categories.Fighting:
      element = <FightingBg style={style} {...props} />;
      break;
    case Categories.Psychic:
      element = <PsychicBg style={style} {...props} />;
      break;
    case Categories.Poison:
      element = <PoisonBg style={style} {...props} />;
      break;
    case Categories.Water:
      element = <WaterBg style={style} {...props} />;
      break;
    case Categories.Fire:
      element = <FireBg style={style} {...props} />;
      break;
    case Categories.Steel:
      element = <SteelBg style={style} {...props} />;
      break;
    case Categories.Flying:
      element = <FlyingBg style={style} {...props} />;
      break;
  }
  return element;
}

export function PokemonTypeIcon({ category, style, ...props }: PokemonTypeIconProps) {
  let element = <Normal style={style} {...props} />;
  switch (category) {
    case Categories.Grass:
      element = <Grass style={style} {...props} />;
      break;
    case Categories.Bug:
      element = <Bug style={style} {...props} />;
      break;
    case Categories.Dark:
      element = <Dark style={style} {...props} />;
      break;
    case Categories.Dragon:
      element = <Dragon style={style} {...props} />;
      break;
    case Categories.Electric:
      element = <Electric style={style} {...props} />;
      break;
    case Categories.Fairy:
      element = <Fairy style={style} {...props} />;
      break;
    case Categories.Ghost:
      element = <Ghost style={style} {...props} />;
      break;
    case Categories.Ice:
      element = <Ice style={style} {...props} />;
      break;
    case Categories.Ground:
      element = <Ground style={style} {...props} />;
      break;
    case Categories.Rock:
      element = <Rock style={style} {...props} />;
      break;
    case Categories.Fighting:
      element = <Fighting style={style} {...props} />;
      break;
    case Categories.Psychic:
      element = <Psychic style={style} {...props} />;
      break;
    case Categories.Poison:
      element = <Poison style={style} {...props} />;
      break;
    case Categories.Water:
      element = <Water style={style} {...props} />;
      break;
    case Categories.Fire:
      element = <Fire style={style} {...props} />;
      break;
    case Categories.Steel:
      element = <Steel style={style} {...props} />;
      break;
    case Categories.Flying:
      element = <Flying style={style} {...props} />;
      break;
  }
  return element;
}