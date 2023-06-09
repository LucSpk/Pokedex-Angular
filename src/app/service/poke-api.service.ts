import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  private offset: number = 0;
  private limit: number = 151;

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}pokemon?offset=${this.offset}&limit=${this.limit}`).pipe(
      tap( res => res),
      tap( res => {
        res.results.map( (resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url)
            .subscribe(res => resPokemons.status = res);
        });
      })
    );
  }

  public apiGetPokemonPorId(id: number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}pokemon/${id}`).pipe(
      res => res
    );
  }

  public apiGetPokemons(url: string):Observable<any> {
    return this.http.get<any>(url).pipe(
      map((res: any) => res)
    );
  }

  public getTotalPokemon() {
    return this.limit;
  }
}
