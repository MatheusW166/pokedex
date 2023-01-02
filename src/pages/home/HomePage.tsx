import { useEffect, useState } from "react";
import { PokemonApiAdapter } from "../../services/PokemonApiAdapter";
import {
  Result,
  PokemonRootEndpointResponse
} from "../../services/endpoints/endpoint_pokemon/models/PokemonRootEndpointResponse";

export function HomePage() {
  const [pokemons, setPokemons] = useState<Result[]>([]);
  const client = new PokemonApiAdapter();
  const getPokemons = async () => {
    console.log("BUSCOU!");
    client.getPokemons().then((res) => {
      const data = (res as PokemonRootEndpointResponse).results;
      setPokemons(data);
    });
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      {pokemons.map((e, i) => (
        <p key={i}>{JSON.stringify(e)}</p>
      ))}
    </div>
  );
}
