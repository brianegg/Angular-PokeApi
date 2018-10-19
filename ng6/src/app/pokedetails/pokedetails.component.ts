import { Component, OnInit } from '@angular/core';

import {PokemonService} from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.scss']
})
export class PokedetailsComponent implements OnInit {

	pokemon;
	sprite;
	isImageLoading = true;

	imageToShow: any;

	constructor(
		private _pokemonService: PokemonService, 
		private _route: ActivatedRoute
	) 
	{
		this._route.params.subscribe(url => this.pokemon = url.route)
	}

  	ngOnInit() {
  		this._pokemonService.getPokemon(this.pokemon).subscribe(
  			data => {
  				this.pokemon = data;
  				this.getImageFromService();
  			})
  	}

  	getImageFromService() {
      this.isImageLoading = true;
      this._pokemonService.getImage(this.pokemon.sprites.front_shiny).subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
}

  	createImageFromBlob(image: Blob) {
		let reader = new FileReader();
		reader.addEventListener("load", () => {
			this.imageToShow = reader.result;
		}, false);
		if (image) {
		  reader.readAsDataURL(image);
		}
	}
}
