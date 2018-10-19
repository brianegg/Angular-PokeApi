import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

	constructor(private _http: HttpClient) { }

	getPokemons(){
		return this._http.get('https://pokeapi.co/api/v2/pokemon/');
	}

	getPokemon(pokeRoute){
		return this._http.get('https://pokeapi.co/api/v2/pokemon/'+ pokeRoute);
	}

	getImage(imageUrl: string): Observable<Blob> {
		return this._http.get(imageUrl, { responseType: 'blob' });
	}
}
