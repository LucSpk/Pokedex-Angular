import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

// Services
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

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
    ice: '#B7E8E8'
  }

  mainTypes = Object.keys(this.cardColors);

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void{
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res; 
        console.log(this.pokemon);
      }
    );
  }

  public leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while(s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  public getImg(id: string): string {
    return `../../../assets/pokemon/${id}.png`;
  }

  public tipoPokemon(types: any[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    const type = this.mainTypes.find( type => pokeTypes.indexOf(type) > -1);
    
    if(type != undefined)
      return type;
    
    return "normal";
  }

  public toUpperCaseFirsChar(value : string): string {
    const text = value.replace("-", " ");
    return text[0].toUpperCase() + text.substring(1);
  }

  public estilizaCardPorTipo(types: any[]): string {  
    const pokeTypes = types.map( (type : any) => type.type.name);
    const type = this.mainTypes.find( type => pokeTypes.indexOf(type) > -1);
    
    if(type === "fire")
      return '#FFB997';

    if(type === "grass")
      return '#b3f3d5';

    if(type === "electric")
      return '#F4ECA4';

    if(type === "water")
      return '#A4D9E8';

    if(type === "ground")
      return '#D6C8A1';

    if(type === "rock")
      return '#D9D9C6';

    if(type === "fairy")
      return '#F7DDE8';

    if(type === "poison")
      return '#D1B7D8';

      if(type === "bug")
      return '#D8E1B7';

    if(type === "dragon")
      return '#B7B4D8';

    if(type === "psychic")
      return '#E1B7D8';
    
    if(type === "ghost")
      return '#C7B';

    if(type === "flying")
      return '#B7D8DE';

    if(type === "fighting")
      return '#D8C0B7';

    return '#D8D8D8';
  }
}
