import { PokemonApiAdapter } from "../../../src/services/PokemonApiAdapter";
import { describe, expect, it } from "@jest/globals";

describe("retrieve something from pokeapi", () => {
  const instance = new PokemonApiAdapter();

  it("should return OK", async () => {
    const resp = await instance.getPokemons();
    console.log(resp);
    expect(resp.status).toBe(200);
  });
});

export { };