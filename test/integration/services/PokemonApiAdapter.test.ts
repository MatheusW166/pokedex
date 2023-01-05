/* eslint-disable @typescript-eslint/no-explicit-any */
import { isRequestError, RequestError } from "../../../src/errors/RequestError";
import { PokemonEndpointResponse } from "../../../src/services/endpoints/endpoint_pokemon/models/PokemonEndpointResponse";
import { PokemonRootEndpointResponse } from "../../../src/services/endpoints/endpoint_pokemon/models/PokemonRootEndpointResponse";
import { PokemonApiAdapter } from "../../../src/services/PokemonApiAdapter";

type PokemonPage = PokemonRootEndpointResponse;
type Pokemon = PokemonEndpointResponse;

describe("OK: PokemonApiAdapter.ts", () => {
  const instance = new PokemonApiAdapter();

  it("Should return 30 elements", async () => {
    const resp = await instance.getPokemons();
    expect(isRequestError(resp)).toBe(false);
    expect((resp as PokemonPage).results.length).toBe(30);
  });

  it("Should return an ID:1 element", async () => {
    const resp = await instance.getPokemonById(1);
    expect(isRequestError(resp)).toBe(false);
    expect((resp as Pokemon).id).toBe(1);
  });

  it("Should return an NAME:bulbasaur element", async () => {
    const resp = await instance.getPokemonByName("bulbasaur");
    expect(isRequestError(resp)).toBe(false);
    expect((resp as Pokemon).name).toBe("bulbasaur");
  });
});

describe("ERRORS: PokemonApiAdapter.ts", () => {
  const instance = new PokemonApiAdapter();

  it("Should return RequestError:404", async () => {
    const err = await instance.getPokemonByName("undefined creature");
    expect(isRequestError(err)).toBe(true);
    expect((err as RequestError).statusCode).toBe(404);
  });
});
