import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

import { TypeColorLt, TypeColorDk } from '../../models/typesColor';
import { Pokemon, Status } from 'src/app/models/pokemon';


@Component({
  selector: 'pokemon-favorit-list',
  templateUrl: './pokemon-favorit-list.component.html',
  styleUrls: ['./pokemon-favorit-list.component.scss']
})
export class PokemonFavoritListComponent {

  private setAllPokemons: any = [];
  public getAllPokemons: any;

  public apiError: boolean = false;
  public isLoading: boolean = false;
  
  public pokeFavorits = [1, 4, 7, 9, 18, 23, 37, 42];

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit() {
    this.filterFavorits();
  }

  public filterFavorits() {
    for(let i = 0; i < this.pokeFavorits.length; i++) {
      this.pokeApiService.apiGetPokemonPorId(this.pokeFavorits[i]).subscribe(
        (res: any) => {
          this.setAllPokemons[i] = res;
          this.isLoading = true;
          this.apiError = false;
        }, error => {
          this.isLoading = false;
          this.apiError = true;
        }
      );
      this.getAllPokemons = this.setAllPokemons;
    }
    console.log(this.getAllPokemons);
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
