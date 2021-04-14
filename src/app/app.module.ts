
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule,} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MenuComponent, route } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { RessourceComponent } from './ressource/ressource.component';
import { LiveCodingComponent,  } from './live-coding/live-coding.component';
import { ExercicesComponent, } from './exercices/exercices.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RessourceComponent,
    LiveCodingComponent,
    ExercicesComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
