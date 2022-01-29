import { Type } from './type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`
}

export function getPokemonNumber(pokemon: Pokemon): string {
  return padNumber(pokemon.number);
}

function padNumber(number: number, padding = 3): string {
  const numberStr = number.toString();
  return numberStr.padStart(padding, '0');
}
