import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Tap } from './tap.model';

@Component({
	selector: 'pint-sale',
	template:`
		<div *ngIf="childSelectedTap">
		<div class="beerGlass">
			<img id="gray" src="/resources/images/gray.png">
			<img id="glass" src="/resources/images/beer-mug-empty.png">
		</div>
			<button class="btn btn-info" (click)="pintButtonClicked()">Pint</button>
			<button class="btn btn-default" (click)="halfgrowlButtonClicked()">1/2 Growler</button>
			<button class="btn btn-warning" (click)="growlButtonClicked()">Growler</button>
			<button class="btn btn-danger" (click)="oopsButtonClicked()">Undo</button>
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

	oopsButtonClicked() {
		this.childSelectedTap.pints +=1;
	}

}
