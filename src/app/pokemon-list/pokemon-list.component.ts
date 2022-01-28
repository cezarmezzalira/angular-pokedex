import { Component } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';
import { Type } from 'src/_model/type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: [Type.Grass, Type.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      types: [Type.Grass, Type.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      number: 6,
      name: 'Charizard',
      types: [Type.Fire, Type.Flying],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
      number: 9,
      name: 'Blastoise',
      types: [Type.Water],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png',
      number: 50,
      name: 'Diglett',
      types: [Type.Ground],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png',
      number: 54,
      name: 'Psyduck',
      types: [Type.Water],
    },
  ];


}



