import { Pokedex } from "../../components/Pokedex";

export function HomeView() {
  return (
    <div className="home">
      <main>
        <section className="top"></section>
        <section className="pokedex-page">
          <h2>Pokedex</h2>
          <Pokedex />
        </section>
      </main>
    </div>
  );
}
