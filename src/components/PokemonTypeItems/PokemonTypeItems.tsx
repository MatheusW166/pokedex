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
}

interface PokemonTypeBgProps {
  category: Categories;
}

export function PokemonTypeBg({ category }: PokemonTypeBgProps) {
  let element = <NormalBg />;
  switch (category) {
    case Categories.Grass:
      element = <GrassBg />;
      break;
    case Categories.Bug:
      element = <BugBg />;
      break;
    case Categories.Dark:
      element = <DarkBg />;
      break;
    case Categories.Dragon:
      element = <DragonBg />;
      break;
    case Categories.Electric:
      element = <ElectricBg />;
      break;
    case Categories.Fairy:
      element = <FairyBg />;
      break;
    case Categories.Ghost:
      element = <GhostBg />;
      break;
    case Categories.Ice:
      element = <IceBg />;
      break;
    case Categories.Ground:
      element = <GroundBg />;
      break;
    case Categories.Rock:
      element = <RockBg />;
      break;
    case Categories.Fighting:
      element = <FightingBg />;
      break;
    case Categories.Psychic:
      element = <PsychicBg />;
      break;
    case Categories.Poison:
      element = <PoisonBg />;
      break;
    case Categories.Water:
      element = <WaterBg />;
      break;
    case Categories.Fire:
      element = <FireBg />;
      break;
    case Categories.Steel:
      element = <SteelBg />;
      break;
    case Categories.Flying:
      element = <FlyingBg />;
      break;
  }
  return element;
}

export function PokemonTypeIcon({ category }: PokemonTypeIconProps) {
  let element = <Normal />;
  switch (category) {
    case Categories.Grass:
      element = <Grass />;
      break;
    case Categories.Bug:
      element = <Bug />;
      break;
    case Categories.Dark:
      element = <Dark />;
      break;
    case Categories.Dragon:
      element = <Dragon />;
      break;
    case Categories.Electric:
      element = <Electric />;
      break;
    case Categories.Fairy:
      element = <Fairy />;
      break;
    case Categories.Ghost:
      element = <Ghost />;
      break;
    case Categories.Ice:
      element = <Ice />;
      break;
    case Categories.Ground:
      element = <Ground />;
      break;
    case Categories.Rock:
      element = <Rock />;
      break;
    case Categories.Fighting:
      element = <Fighting />;
      break;
    case Categories.Psychic:
      element = <Psychic />;
      break;
    case Categories.Poison:
      element = <Poison />;
      break;
    case Categories.Water:
      element = <Water />;
      break;
    case Categories.Fire:
      element = <Fire />;
      break;
    case Categories.Steel:
      element = <Steel />;
      break;
    case Categories.Flying:
      element = <Flying />;
      break;
  }
  return element;
}