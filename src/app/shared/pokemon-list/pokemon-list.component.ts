import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

import { TypeColorLt, TypeColorDk } from '../../models/typesColor';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  private setAllPokemons: any;
  public getAllPokemons: any;

  cardColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    ghost: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5' ,
    ice: '#B7E8E8',
    dark: '#333'
  }

  mainTypes = Object.keys(this.cardColors);

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        console.log(res);
        for (let i = 0; i < res.results.length; i++) {
          const pokemon = res.results[i];
          let status: any;
          status = pokemon.status;
        }

        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

  public leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while(s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  public getColorBaseTipoLt(types: string[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    const primitiveType = pokeTypes[0]
    return TypeColorLt[primitiveType as keyof typeof TypeColorLt];
  }

  public getColorBaseTipoDk(types: string[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    const primitiveType = pokeTypes[0]
    return TypeColorDk[primitiveType as keyof typeof TypeColorDk];
  }

  public getColorTipoPokemonLt(type: string): string {
    return TypeColorLt[type as keyof typeof TypeColorLt];
  }
  public getColorTipoPokemonDk(type: string): string {
    return TypeColorDk[type as keyof typeof TypeColorDk];
  }

}
