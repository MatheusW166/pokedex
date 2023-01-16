import { Pokedex } from "../../components/Pokedex";
import { LogoName, PokeballConcept, Pokeball } from "../../components/Logos";

export function HomeView() {
  return (
    <div className="home">
      <main>
        <section>
          <div className="container">
            <LogoName />
            <div className="title">
              <h1>Find your favorite Pokemons!</h1>
              <p>Search and find all information about it.</p>
            </div>
            <PokeballConcept />
          </div>
        </section>
        <div className="floating-ball-container">
          <div className="floating-ball">
            <Pokeball />
          </div>
        </div>
        <section>
          <h2>Pokedex</h2>
          <Pokedex />
        </section>
      </main>
    </div>
  );
}
