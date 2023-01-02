export enum Categories {
  Normal = "normal",
  Fire = "fire",
  Water = "water",
  Electric = "electric",
  Grass = "grass",
  Ice = "ice",
  Fighting = "fighting",
  Poison = "poison",
  Ground = "ground",
  Flying = "flying",
  Psychic = "psychic",
  Bug = "bug",
  Rock = "rock",
  Ghost = "ghost",
  Dragon = "dragon",
  Dark = "dark",
  Steel = "steel",
  Fairy = "fairy"
}

/**
 * @param {string} name - a name to convert
 * @returns {Categories} - Categories equivalent
 */
export function toCategory(name: string): Categories {
  if (Object.values(Categories).includes(name as Categories)) {
    return name as Categories;
  }
  return Categories.Normal;
}
