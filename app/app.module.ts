import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';

import { NewTapComponent } from './new-tap.component';
import { TapListComponent } from './tap-list.component';
// import { EditTaskComponent } from './edit-task.component';
// import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewTapComponent, TapListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
