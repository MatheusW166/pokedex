import { Categories } from "./Categories";

interface PokemonProps {
  name: string;
  order: number;
  image: string;
  categories: Categories[];
}

export class Pokemon {
  name: string;
  order: number;
  image: string;
  categories: Categories[];

  constructor(props: PokemonProps) {
    this.name = props.name;
    this.order = props.order;
    this.image = props.image;
    this.categories = props.categories;
  }
}