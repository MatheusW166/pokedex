import { PokemonRootEndpointResponseInterface } from "./endpoints/pokemon/models/PokemonRootEndpointResponseInterface";

export interface PokemonApiRequestProtocols {
  getPokemons(limit: number, offset: number): Promise<PokemonRootEndpointResponseInterface>;
}