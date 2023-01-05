import { useEffect, useState } from "react";
import { Paginator } from "../../components/Paginator/Paginator";
import { Pokedex } from "../../components/Pokedex/Pokedex";
import { isRequestError } from "../../errors/RequestError";
import { PokemonRootEndpointResponse } from "../../services/endpoints/endpoint_pokemon/models/PokemonRootEndpointResponse";
import { PokemonApiAdapter } from "../../services/PokemonApiAdapter";

interface HomePageProps {
  pageLimit?: number;
  apiAdapter?: PokemonApiAdapter;
}

export function HomePage({
  pageLimit = 25,
  apiAdapter = new PokemonApiAdapter()
}: HomePageProps) {
  const [totalPages, setTotalPages] = useState(47);
  const [pageNumber, setPageNumber] = useState(1);
  const [pokemonPage, setPokemonPage] = useState<PokemonRootEndpointResponse>();

  async function getPokemonPage() {
    const res = await apiAdapter.getPokemons(
      pageLimit,
      pageLimit * (pageNumber - 1)
    );
    if (isRequestError(res)) {
      return;
    }
    setTotalPages(Math.ceil(res.count / pageLimit));
    console.log("Page mudou");
    setPokemonPage(res);
  }

  useEffect(() => {
    getPokemonPage();
  }, [pageNumber]);

  return (
    <section className="pokedex">
      <h2>Pokedex</h2>
      <div className="page">
        <Paginator
          pageNumber={pageNumber}
          totalPages={totalPages}
          onNavigateBack={() => {
            if (pageNumber === 1) return 1;
            setPageNumber(pageNumber - 1);
            return pageNumber;
          }}
          onNavigateNext={() => {
            if (pageNumber === totalPages) return totalPages;
            setPageNumber(pageNumber + 1);
            return pageNumber;
          }}
        />
        <div className="pokedex-list">
          <Pokedex pokemonPage={pokemonPage} />
        </div>
      </div>
    </section>
  );
}
