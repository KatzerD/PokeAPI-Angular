import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = 'https://pokeapi.co/api/v2/';
  }

  getPokemonSpecies(): Observable<any>{
    return this._http.get(this.url+'pokemon-species/');
  }

  getPokemonSpeciesInterval(offset: number, limit: number): Observable<any>{
    return this._http.get(this.url+'pokemon-species/?offset='+offset+'&limit='+limit);
  }

  getPokemon(pokemonId: number): Observable<any>{
    return this._http.get(this.url+'pokemon/'+pokemonId+'/');
  }

  getPokemonSpecieByUrl(url: string): Observable<any>{
    return this._http.get(url);
  }

}
