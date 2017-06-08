import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Tap } from './tap.model';

@Component({
	selector: 'edit-tap',
	template:`
	<div>
		<div *ngIf="childSelectedTap">
			<h3>Edit Tap: <span class="edit-tap-name">{{childSelectedTap.brewery}}: {{childSelectedTap.beer_name}}</span></h3>
			<br>
			<div class="form-group">
				<label>Brewery:</label>
				<input class="form-control" [(ngModel)]="childSelectedTap.brewery">
			</div>
			<div class="form-group">
				<label>Beer Name:</label>
				<input class="form-control" [(ngModel)]="childSelectedTap.beer_name">
			</div>
			<div class="form-group">
				<label>Type of Brew:</label>
				<input class="form-control" [(ngModel)]="childSelectedTap.type">
			</div>
			<div class="form-group">
				<label>ABV:</label>
				<input class="form-control" [(ngModel)]="childSelectedTap.alcohol">
			</div>
			<div class="form-group">
				<label>Price:</label>
				<input class="form-control" [(ngModel)]="childSelectedTap.price">
			</div>
			<button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
		</div>
	</div>
	`
})

export class EditTapComponent {
	@Input() childSelectedTap: Tap;
	@Output() doneButtonClickedSender = new EventEmitter();

	doneButtonClicked() {
		this.doneButtonClickedSender.emit();
	}
}
