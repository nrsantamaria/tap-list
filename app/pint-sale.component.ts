import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Tap } from './tap.model';

@Component({
	selector: 'pint-sale',
	template:`
		<div *ngIf="childSelectedTap">
			<button class="btn btn-info" (click)="pintButtonClicked()">Pint</button>
			<button class="btn btn-default" (click)="halfgrowlButtonClicked()">Half Growler</button>
			<button class="btn btn-warning" (click)="growlButtonClicked()">Growler</button>
		</div>
	`
})

export class PintSaleComponent {
	@Input() childSelectedTap: Tap;

	pintButtonClicked() {
		this.childSelectedTap.pints -=1;
	}

	halfgrowlButtonClicked() {
		this.childSelectedTap.pints -=2;
	}

	growlButtonClicked() {
		this.childSelectedTap.pints -=4;
	}
}
