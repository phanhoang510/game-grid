import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game-list/game.service';
import { IGame } from '../game-list/game.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  detail!: IGame;
  arrayGames: IGame[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private gameService: GameService
  ) {}
  public ngOnInit() {
    this.gameService.arrayGames;
    if (this.gameService.arrayGames.length) {
      this.arrayGames = this.gameService.arrayGames;
    } else {
      this.arrayGames = this.gameService.randomListGames();
    }
    const id = this.activeRoute.snapshot.paramMap.get('id') || 0;

    this.detail = this.arrayGames[+id];
  }
}
