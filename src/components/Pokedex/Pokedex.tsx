import { usePokemons } from "../../hooks/usePokemons";
import { Paginator } from "../Paginator";
import { PokedexList } from "./PokedexList";

export function Pokedex() {
  const { pokemonsData, searchPokemonPage } = usePokemons({});

  const buildPaginator = () => (
    <Paginator
      pageNumber={1}
      totalPages={pokemonsData.pageData.totalPages}
      onNavigateBack={() => {
        return 1;
      }}
      onNavigateNext={() => {
        searchPokemonPage(2);
        return 1;
      }}
    />
  );

  return (
    <div className="pokedex">
      {buildPaginator()}
      <div className="pokedex-list">
        <PokedexList pokemonPageDetails={pokemonsData.pokemons} />
      </div>
      {buildPaginator()}
    </div>
  );
}
