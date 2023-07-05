import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GameService } from './game.service';
import { IGame } from './game.model';
import { Observable, concatMap, delay, from, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  listsGame: IGame[] = [];
  listsAll: IGame[] = [];
  currentPage = 0;
  pageSize = 6;
  
  constructor(private gameService: GameService, private router: Router) {
    console.log(window.innerWidth);
    const widthWindow = window.innerWidth;
    this.listsAll = this.gameService.randomListGames();
    if (widthWindow <= 1439) {
      this.pageSize = 6;
    }
    if (widthWindow >= 1920) {
      this.pageSize = 10;
    }
    if (widthWindow >= 1439 && widthWindow < 1920) {
      this.pageSize = 8;
    }
  }

  ngOnInit(): void {
    this.getListGame();
  }

  getListGame() {
    const start = this.currentPage * this.pageSize;
    const end = (this.currentPage + 1) * this.pageSize;
    const list = this.listsAll.slice(start, end);

    return of(list)
      .pipe(delay(500))
      .subscribe((item) => {
        this.listsGame = item;
        console.log(item);
      });
  }
  nextPage() {
    this.currentPage += 1;
    this.getListGame();
  }
  previous() {
    if (!this.currentPage) {
      return;
    }
    this.currentPage -= 1;
    this.getListGame();
  }
  navigateDetail(id: number) {
    this.router.navigateByUrl(`game-detail/${id}`)
  }
}
