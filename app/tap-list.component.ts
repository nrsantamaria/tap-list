import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Tap } from './tap.model';

@Component({
	selector: 'tap-list',
	template: `
	<ul>
		<li *ngFor="let currentTap of childTapList">{{currentTap.brewery}} {{currentTap.beer_name}} <button (click)="editButtonHasBeenClicked(currentTap)">Edit!</button></li>
	</ul>
	`
})

export class TapListComponent {
	@Input() childTapList: Tap[];
	@Output() clickSender = new EventEmitter();

	editButtonHasBeenClicked(tapToEdit: Tap) {
		this.clickSender.emit(tapToEdit);
	}
}
