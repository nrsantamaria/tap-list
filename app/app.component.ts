import { Component } from '@angular/core';
import { Tap } from './tap.model';

@Component({
	selector: 'app-root',
	template:`
	<div class="container">
		<h1>Tap House</h1>
		<new-tap (newTapSender)="addTap($event)"></new-tap>
		<tap-list [childTapList]="masterTapList"></tap-list>
	</div>
	`
})

export class AppComponent {

	masterTapList: Tap[] = [];

	addTap(newTapFromChild: Tap) {
		this.masterTapList.push(newTapFromChild)
	}

}
