import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Tap } from './tap.model';

@Component({
	selector: 'tap-list',
	template: `
	<ul>
		<li *ngFor="let currentTap of childTapList">{{currentTap.brewery}} {{currentTap.beer_name}} {{currentTap.pints}}<button class="btn btn-success" (click)="editButtonHasBeenClicked(currentTap)">Edit!</button> <pint-sale [childSelectedTap]="currentTap"></pint-sale></li>
	</ul>
	`
})

export class TapListComponent {
	@Input() childTapList: Tap[];
	@Output() clickSender = new EventEmitter();

	editButtonHasBeenClicked(tapToEdit: Tap) {
		this.clickSender.emit(tapToEdit);
	}

	// pintButtonHasBeenClicked(pintSold: Tap) {
	// 	pintSold.pint
	// 	this.pintSender.emit(pintSold);
	// }
}
//
// <button class="btn btn-info" (click)="pintButtonHasBeenClicked(currentTap)">Pint Sold</button>
