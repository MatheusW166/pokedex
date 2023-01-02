import { useState } from "react";
import { Pokedex } from "../../components/Pokedex/Pokedex";

export function HomePage() {
  const [pokedexPage, setPokedexPage] = useState(0);

  return (
    <section className="pokedex">
      <h2>Pokedex</h2>
      <div className="pokedex-list">
        <Pokedex limit={20} offset={pokedexPage * 20} />
      </div>
    </section>
  );
}
