import { Component, Output, EventEmitter } from '@angular/core';
import  { Tap } from './tap.model';

@Component({
	selector: 'new-tap',
	template:`
	<h2>New Tap</h2>
	<div class="form-group">
		<label>Brewery:</label>
		<input class="form-control" #newBrewery>
	</div>
	<div class="form-group">
		<label>Beer Name:</label>
		<input class="form-control" #newBeerName>
	</div>
	<div class="form-group">
		<label>Type of Brew:</label>
		<select class="form-control" #newTypeOfBrew>
			<option value="Ale">Ale</option>
			<option value="Lager">Lager</option>
			<option value="Stout">Stout</option>
			<option value="Malt">Malt</option>
		</select>
	</div>
	<div class="form-group">
		<label>ABV:</label>
		<input class="form-control" type="number" min="1" #newAlcoholContent>
	</div>
	<div class="form-group">
		<label>Price:</label>
		<input class="form-control" type="number" min="1" #newPrice>
	</div>
	<button class="btn btn-success" (click)="submitForm(newBrewery.value, newBeerName.value, newTypeOfBrew.value, newAlcoholContent.value, newPrice.value); newBrewery.value=''; newBeerName.value=''; newAlcoholContent.value=''; newPrice.value='';">Add</button>
	`
})

export class NewTapComponent {
	@Output() newTapSender = new EventEmitter();

	submitForm(brewery: string, beer_name: string, type: string, alcohol: number, price: number){
		var newTapToAdd: Tap = new Tap (brewery, beer_name, type, alcohol, price);
		this.newTapSender.emit(newTapToAdd);
	}
}
