import { Component, OnInit, OnDestroy } from '@angular/core';
import { BGGService } from '../bgg.service';
import { Game } from '../models';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy {

  theGame!: Game
  theSub$!: Subscription

  constructor(private bggSvc: BGGService){}

  ngOnInit(): void {
      this.theSub$ = this.bggSvc.onSearchResults.subscribe(returnedGame => {this.theGame=returnedGame})
  }

  ngOnDestroy(): void {
      this.theSub$.unsubscribe()
  }
}
