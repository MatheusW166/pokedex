import { PokemonApiInterface } from "./PokemonApiInterface";

export class PokemonApiAdapter implements PokemonApiInterface {
  getSomething(): string {
    return "Hello World";
  }
}