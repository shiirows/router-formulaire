import {Routes} from '@angular/router'
import { Component, OnInit, } from '@angular/core';

import { LiveCodingComponent } from '../live-coding/live-coding.component';
import { ExercicesComponent } from '../exercices/exercices.component';
import { RessourceComponent } from '../ressource/ressource.component';


const route :Routes = [
{path: 'live-coding', component:LiveCodingComponent },
{path: 'exercices', component:ExercicesComponent },
{path: 'ressource', component:RessourceComponent }];


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }
  
}

export {route}