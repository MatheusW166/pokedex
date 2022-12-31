import { PokemonRootEndpointResponseInterface } from "./endpoints_response_interfaces/pokemon_endpoint/PokemonRootEndpointResponseInterface";
import { PokemonApiRequestProtocols } from "./PokemonApiRequestProtocols";

export class PokemonApiAdapter implements PokemonApiRequestProtocols {
  getPokemons(limit: number, offset: number): PokemonRootEndpointResponseInterface {
    console.log(limit);
    console.log(offset);
    return {
      count: 10,
      next: "",
      previous: "",
      results: [],
    };
  }
}