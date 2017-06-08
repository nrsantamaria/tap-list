import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Tap } from './tap.model';

@Component({
	selector: 'tap-list',
	template: `
	<select (change)="onChange($event.target.value)">
		<option value="allTaps">All Taps</option>
		<option value="lowContent">Low Alcohol Content</option>
		<option value="highContent">High Alcohol Content</option>
	</select>
	<div *ngFor="let currentTap of childTapList | alcoholContent:filterByAlcoholContent">
		<p>Brewery: {{currentTap.brewery}}</p>
		<p>Beer Name: {{currentTap.beer_name}}</p>
		<p>Type: {{currentTap.type}}</p>
		<p>Alcohol Content: {{currentTap.alcohol}}</p>
		<p>Current Number of Pints: {{currentTap.pints}}</p>
		<button class="btn btn-success" (click)="editButtonHasBeenClicked(currentTap)">Edit!</button>
		<pint-sale [childSelectedTap]="currentTap"></pint-sale>
	</div>
	`
})

export class TapListComponent {
	@Input() childTapList: Tap[];
	@Output() clickSender = new EventEmitter();

	filterByAlcoholContent: string = "allTaps";

	onChange(optionFromMenu) {
		this.filterByAlcoholContent = optionFromMenu;
	}

	editButtonHasBeenClicked(tapToEdit: Tap) {
		this.clickSender.emit(tapToEdit);
	}
}
