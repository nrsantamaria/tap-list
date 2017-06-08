import { Component } from '@angular/core';
import { Tap } from './tap.model';

@Component({
	selector: 'app-root',
	template:`
	<div class="jumbotron">
		<h1>Tap House <img src="./resources/images/fast-beer.png"></h1>
		<br>
		<h2>Beer With Speed Is What You Need</h2>
	</div>
	<div class="container">
		<new-tap (newTapSender)="addTap($event)"></new-tap>
		<div>
			<h2>Tap List</h2>
			<tap-list [childTapList]="masterTapList" (clickSender)="editTap($event)"></tap-list>
		</div>
		<hr>
		<edit-tap [childSelectedTap]="selectedTap" (doneButtonClickedSender)="finishedEditing()"></edit-tap>
	</div>
	`
})

export class AppComponent {

	masterTapList: Tap[] = [];
	selectedTap = null;

	addTap(newTapFromChild: Tap) {
		this.masterTapList.push(newTapFromChild)
	}

	editTap(clickedTap) {
		this.selectedTap = clickedTap;
	}

	finishedEditing(){
		this.selectedTap = null;
	}
}
