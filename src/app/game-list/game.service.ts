import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IGame } from './game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  namesImageGame = [
    {fileName:'12Coins.webp', nameGame: '12 Coins' },
    {fileName:'BookofDead.webp', nameGame: 'Book of Dead' },
    {fileName:'BookOfRampage.webp', nameGame: 'Book Of Rampage' },
    {fileName:'BuffaloTrail.webp', nameGame: 'Buffalo Trail' },
    {fileName:'MoneyTrain2.webp', nameGame: 'Money Train 2' },
    {fileName:'RaptorDoublemax.webp', nameGame: 'Raptor Double max' },
    {fileName:'WinzToTheMoon.webp', nameGame: ' Winz To The Moon' },
  ];
  namesImageType = ['hot.svg', 'new.svg', 'promo.svg'];
  constructor() {}

  randomListGames(length: number) {
    const array: IGame[] = Array(length)
      .fill(undefined)
      .map((_, i) => {
        // random file background game
        const randomIndexGame = Math.floor(
          Math.random() * this.namesImageGame.length
        );
        const name = this.namesImageGame[randomIndexGame];

        // random file type game
        const randomIndexType = Math.floor(
          Math.random() * this.namesImageType.length
        );
        const type = this.namesImageType[randomIndexType];

        return {
          id: i + 1,
          srcImg: `./assets/images/${name.fileName}`,
          typeGame: `./assets/images/${type}`,
          nameGame:  `./assets/images/${name.nameGame}`,
        };
      });
      return array;
  }
}
