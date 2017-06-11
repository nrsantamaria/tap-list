import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Tap } from './tap.model';

@Component({
	selector: 'pint-sale',
	template:`
		<div *ngIf="childSelectedTap">
			<div class="glassDiv">
				<div class="beerGlass" [style.height]="getStyle()">
					<img id="glass" src="/resources/images/beer-mug-empty.png">
				</div>
			</div>
			<button class="btn btn-info" (click)= "showStyle = !showStyle;">Pint</button>
			<button class="btn btn-default" (click)="halfgrowlButtonClicked()">1/2 Growler</button>
			<button class="btn btn-warning" (click)="growlButtonClicked()">Growler</button>
			<button class="btn btn-danger" (click)="oopsButtonClicked()">Undo</button>
		</div>
	`
})
// "pintButtonClicked()"
export class PintSaleComponent {
	@Input() childSelectedTap: Tap;
	showStyle: false;

	getStyle() {
		if(this.showStyle) {
			return "300px";
		} else {
			return "";
		}
	}

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
