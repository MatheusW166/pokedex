import { Categories, toCategory } from "../models/Categories";
import { PokemonEndpointResponse } from "../services/endpoints/endpoint_pokemon/models/PokemonEndpointResponse";

export function getPokemonImg(pokemon: PokemonEndpointResponse): string {
  return (
    pokemon.sprites.other.dream_world.front_default ??
    pokemon.sprites.other["official-artwork"].front_default
  );
}

export function getPokemonCategories(pokemon: PokemonEndpointResponse): Categories[] {
  return pokemon.types.map((type) => toCategory(type.type.name));
}

interface GetPercentualSizeProps {
  percent: number;
  baseSize: number;
  minSize?: number;
  maxSize?: number;
}

export function getPercentualSize({
  percent,
  baseSize,
  minSize = -1,
  maxSize
}: GetPercentualSizeProps): number {
  const size = Math.max(Math.round(baseSize * percent), minSize);
  return maxSize && maxSize < size ? maxSize : size;
}
