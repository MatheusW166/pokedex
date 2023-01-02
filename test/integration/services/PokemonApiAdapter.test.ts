/* eslint-disable @typescript-eslint/no-explicit-any */
import { PokemonApiAdapter } from "../../../src/services/PokemonApiAdapter";

describe("OK: PokemonApiAdapter.ts", () => {
  const instance = new PokemonApiAdapter();

  it("Should return 30 elements", async () => {
    const resp: any = await instance.getPokemons();
    expect(resp.results.length).toBe(30);
  });

  it("Should return an ID:1 element", async () => {
    const resp: any = await instance.getPokemonById(1);
    expect(resp.id).toBe(1);
  });

  it("Should return an NAME:bulbasaur element", async () => {
    const resp: any = await instance.getPokemonByName("bulbasaur");
    expect(resp.name).toBe("bulbasaur");
  });
});

describe("ERRORS: PokemonApiAdapter.ts", () => {
  const instance = new PokemonApiAdapter();

  it("Should return RequestError:404", async () => {
    const err: any = await instance.getPokemonByName("undefined creature");
    console.log(err);
    expect(err.statusCode).toBe(404);
  });
});
