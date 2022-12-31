import { PokemonApiAdapter } from "../../../src/services/PokemonApiAdapter";

describe("retrieving data from api with PokemonApiAdapter", () => {
  const instance = new PokemonApiAdapter();

  it("getPokemons() should return 30 elements", async () => {
    const resp = await instance.getPokemons();
    expect(resp.results.length).toBe(30);
  });
});
