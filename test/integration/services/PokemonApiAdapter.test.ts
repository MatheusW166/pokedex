import { PokemonApiAdapter } from "../../../src/services/PokemonApiAdapter";

describe("PokemonApiAdapter.ts", () => {
  const instance = new PokemonApiAdapter();

  it("Should return 30 elements", async () => {
    const resp = await instance.getPokemons();
    expect(resp.results.length).toBe(30);
  });
});
