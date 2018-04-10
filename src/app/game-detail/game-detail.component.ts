import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../games';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }
  save(): void {
   this.gameService.updateGame(this.game)
     .subscribe(() => this.goBack());
 }

  goBack(): void {
  this.location.back();
}
}
