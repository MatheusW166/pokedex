import { PokemonRootEndpointResponseInterface } from "./endpoints/pokemon/models/PokemonRootEndpointResponseInterface";

export interface PokemonApiProtocols {
  getPokemons(limit: number, offset: number): Promise<PokemonRootEndpointResponseInterface>;
}