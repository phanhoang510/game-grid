import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GameService } from './game.service';
import { IGame } from './game.model';
import { Observable, concatMap, delay, from, of } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  listsGame: IGame[] = [];
  listsAll: IGame[] = [];
  currentPage = 0;
  pageSize = 4;
  total = 100;
  constructor(private gameService: GameService) {
    console.log(window.innerWidth);
    this.listsAll = this.gameService.randomListGames(this.total);
    console.log(this.listsAll);
  }

  ngOnInit(): void {
    this.getListGame();
  }

  getListGame() {
    const list = this.listsAll.slice(
      this.currentPage * this.pageSize,
      (this.currentPage + 1) * this.pageSize
    );

    return of(list)
      .pipe(delay(500))
      .subscribe((item) => {
        this.listsGame = item;
      });
  }
}
