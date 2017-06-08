import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Tap } from './tap.model';

@Component({
	selector: 'tap-list',
	template: `
	<select class="form-control" (change)="onChange($event.target.value)">
		<option value="allTaps">All Taps</option>
		<option value="lowContent">Low Alcohol Content</option>
		<option value="highContent">High Alcohol Content</option>
	</select>
	<br>
	<br>
	<div class="row">
		<div class="col-sm-3" *ngFor="let currentTap of childTapList | alcoholContent:filterByAlcoholContent">
			<img class="tapHandle" src="./resources/images/tap-handle.png">
			<br>
			<br>
				<p><strong>Brewery:</strong> {{currentTap.brewery}}</p>
				<p><strong>Beer Name:</strong> {{currentTap.beer_name}}</p>
				<p><strong>Type:</strong> {{currentTap.type}}</p>
				<p><strong>Alcohol Content:</strong> {{currentTap.alcohol}}</p>
				<p><strong>Current Number of Pints:</strong> {{currentTap.pints}}</p>
				<button class="btn btn-success" (click)="editButtonHasBeenClicked(currentTap)">Edit!</button>
			<br>
			<pint-sale [childSelectedTap]="currentTap"></pint-sale>
		</div>
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
