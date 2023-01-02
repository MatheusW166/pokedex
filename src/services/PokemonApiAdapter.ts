import { PokemonRootEndpointResponseInterface } from "./endpoints/endpoint_pokemon/models/PokemonRootEndpointResponseInterface";
import { PokemonApiProtocols } from "./PokemonApiProtocols";
import { PokemonApiBaseUrl, EndpointPokemon } from "./endpoints/PokemonApiEndpoints";
import { PokemonEndpointResponseInterface } from "./endpoints/endpoint_pokemon/models/PokemonEndpointResponseInterface";
import axios, { AxiosError } from "axios";
import { RequestError } from "./ApiProtocols";

const client = axios.create({
  baseURL: PokemonApiBaseUrl,
  headers: { "Content-Type": "application/json" }
});

export class PokemonApiAdapter implements PokemonApiProtocols {
  async getPokemons(limit = 30, offset = 0): Promise<PokemonRootEndpointResponseInterface | RequestError> {
    try {
      const resp = await client.get(EndpointPokemon, {
        params: {
          limit: limit,
          offset: offset,
        },
      });

      return resp.data as PokemonRootEndpointResponseInterface;
    } catch (err) {
      return this.handleError(err);
    }
  }

  async getPokemonById(id: number): Promise<PokemonEndpointResponseInterface | RequestError> {
    try {
      const resp = await client.get(`${EndpointPokemon}/${id}`);
      return resp.data as PokemonEndpointResponseInterface;
    } catch (err) {
      return this.handleError(err);
    }
  }

  async getPokemonByName(name: string): Promise<PokemonEndpointResponseInterface | RequestError> {
    try {
      const resp = await client.get(`${EndpointPokemon}/${name}`);
      return resp.data as PokemonEndpointResponseInterface;
    } catch (err) {
      return this.handleError(err);
    }
  }

  handleError(err: unknown): RequestError {
    if (err instanceof AxiosError) {
      return {
        name: err.name,
        message: err.message,
        data: err.response?.data,
        statusCode: err.response?.status,
        statusText: err.response?.statusText,
      };
    }

    if (err instanceof Error) {
      return {
        name: err.name,
        message: err.message,
        data: err,
      };
    }

    return {
      name: "Unknown Error",
      message: "Something went wrong",
      data: err ?? {},
    };
  }
}
