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