import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';

import { NewTapComponent } from './new-tap.component';
import { TapListComponent } from './tap-list.component';
import { EditTapComponent } from './edit-tap.component';
import { PintSaleComponent } from './pint-sale.component';
import { AlcoholContentPipe } from './alcohol-content.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewTapComponent, TapListComponent, EditTapComponent, PintSaleComponent, AlcoholContentPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
