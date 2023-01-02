import { ApiProtocols, RequestError } from "./ApiProtocols";
import { PokemonEndpointResponseInterface } from "./endpoints/endpoint_pokemon/models/PokemonEndpointResponseInterface";
import { PokemonRootEndpointResponseInterface } from "./endpoints/endpoint_pokemon/models/PokemonRootEndpointResponseInterface";

export interface PokemonApiProtocols extends ApiProtocols {
  getPokemons(limit: number, offset: number): Promise<PokemonRootEndpointResponseInterface | RequestError>;
  getPokemonByName(name: string): Promise<PokemonEndpointResponseInterface | RequestError>;
  getPokemonById(id: number): Promise<PokemonEndpointResponseInterface | RequestError>;
}

