import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  animations: [
  	trigger('listStagger', [
  		transition('* <=> *', [
  			query(':enter', 
  				[
	  				style({opacity: 0, transform: 'translateY(-15px)'}),
	  				stagger('50ms', 
	  				animate('550ms ease-out',
	  				style({opacity: 1, transform: 'translateY(0px)'})))
	  			], {optional:true}),
  			query(':leave',	animate('50ms', style({opacity:0})),
  			{
  				optional:true
  			})
  		])
  	])
  ]
})
export class PokemonComponent implements OnInit {

	pokemons;
	ready = false;

	constructor( private _pokemonService: PokemonService) { }
	
	ngOnInit() {
		this._pokemonService.getPokemons().subscribe(
			data => {
				this.pokemons = data,
				this.ready = true;
			})
	}

}
