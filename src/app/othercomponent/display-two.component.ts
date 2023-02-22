import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BGGService } from '../bgg.service';
import { Game } from '../models';

@Component({
  selector: 'app-display-two',
  templateUrl: './display-two.component.html',
  styleUrls: ['./display-two.component.css']
})
export class DisplayTwoComponent implements OnInit, OnDestroy {

  games: Game[] = []

  sub$!: Subscription

  constructor(private bggSvc: BGGService) { }

  ngOnInit(): void {
    this.sub$ = this.bggSvc.onOffsetLimitSearchResults.subscribe(
      (games) => {
        this.games = games
      }
    )
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()

  }

}
