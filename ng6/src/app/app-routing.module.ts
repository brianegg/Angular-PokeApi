import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonComponent} from './pokemon/pokemon.component';
import {PokedetailsComponent} from './pokedetails/pokedetails.component';

const routes: Routes = [
	{
		path: '',
		component: PokemonComponent
	},
	{
		path: 'pokedetails/:route',
		component: PokedetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
