import {
  Bug,
  BugBg,
  Dark,
  DarkBg,
  Dragon,
  DragonBg,
  Electric,
  ElectricBg,
  Fairy,
  FairyBg,
  Fighting,
  FightingBg,
  Fire,
  FireBg,
  Flying,
  FlyingBg,
  Ghost,
  GhostBg,
  Grass,
  GrassBg,
  Ground,
  GroundBg,
  Ice,
  IceBg,
  Normal,
  NormalBg,
  Poison,
  PoisonBg,
  Psychic,
  PsychicBg,
  Rock,
  RockBg,
  Steel,
  SteelBg,
  Water,
  WaterBg
} from "../Categories";

import { Categories } from "../../models/Categories";

interface PokemonTypeIconProps extends React.SVGProps<SVGSVGElement> {
  category: Categories;
}

interface PokemonTypeBgProps extends React.SVGProps<SVGSVGElement> {
  category: Categories;
}

export function PokemonTypeBg({ category, ...props }: PokemonTypeBgProps) {
  let Element = NormalBg;
  switch (category) {
    case Categories.Grass:
      Element = GrassBg;
      break;
    case Categories.Bug:
      Element = BugBg;
      break;
    case Categories.Dark:
      Element = DarkBg;
      break;
    case Categories.Dragon:
      Element = DragonBg;
      break;
    case Categories.Electric:
      Element = ElectricBg;
      break;
    case Categories.Fairy:
      Element = FairyBg;
      break;
    case Categories.Ghost:
      Element = GhostBg;
      break;
    case Categories.Ice:
      Element = IceBg;
      break;
    case Categories.Ground:
      Element = GroundBg;
      break;
    case Categories.Rock:
      Element = RockBg;
      break;
    case Categories.Fighting:
      Element = FightingBg;
      break;
    case Categories.Psychic:
      Element = PsychicBg;
      break;
    case Categories.Poison:
      Element = PoisonBg;
      break;
    case Categories.Water:
      Element = WaterBg;
      break;
    case Categories.Fire:
      Element = FireBg;
      break;
    case Categories.Steel:
      Element = SteelBg;
      break;
    case Categories.Flying:
      Element = FlyingBg;
      break;
  }

  return <Element {...props} />;
}

export function PokemonTypeIcon({ category, ...props }: PokemonTypeIconProps) {
  let Element = Normal;
  switch (category) {
    case Categories.Grass:
      Element = Grass;
      break;
    case Categories.Bug:
      Element = Bug;
      break;
    case Categories.Dark:
      Element = Dark;
      break;
    case Categories.Dragon:
      Element = Dragon;
      break;
    case Categories.Electric:
      Element = Electric;
      break;
    case Categories.Fairy:
      Element = Fairy;
      break;
    case Categories.Ghost:
      Element = Ghost;
      break;
    case Categories.Ice:
      Element = Ice;
      break;
    case Categories.Ground:
      Element = Ground;
      break;
    case Categories.Rock:
      Element = Rock;
      break;
    case Categories.Fighting:
      Element = Fighting;
      break;
    case Categories.Psychic:
      Element = Psychic;
      break;
    case Categories.Poison:
      Element = Poison;
      break;
    case Categories.Water:
      Element = Water;
      break;
    case Categories.Fire:
      Element = Fire;
      break;
    case Categories.Steel:
      Element = Steel;
      break;
    case Categories.Flying:
      Element = Flying;
      break;
  }
  return <Element {...props} />;
}
