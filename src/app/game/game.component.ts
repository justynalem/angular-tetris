import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() public playerName: string = '';
  @Output() public onGameExit = new EventEmitter<boolean>();
  public score: number = 0;
  public timePlayed: number = 0;
  public gameplayTime: string = '';
  public gameStatus: string = 'READY TO START';
  public isGameOver: boolean = false;
  public interval: any;

  public onLineCleared() {
    this.score++;
  }
  public onGameOver() {
    this.gameStatus = 'GAME OVER';
  }

  public onClick() {
    const gameFinished = true;
    this.onGameExit.emit(gameFinished);
  }

  public gameStarted() {
    this.gameStatus = 'GAME ON!';
    this.startTimer();
  }

  public gameStopped() {
    this.gameStatus !== 'READY TO START'
      ? (this.gameStatus = 'GAME PAUSED')
      : this.gameStatus;
    this.pauseTimer();
  }

  public startTimer() {
    this.interval = setInterval(() => {
      this.timePlayed++;
      this.displayTime();
    }, 1000);
  }
  public pauseTimer() {
    clearInterval(this.interval);
  }

  public displayTime() {
    const hours: string = String(Math.trunc(this.timePlayed / 3600)).padStart(
      2,
      '0'
    );
    const min: string = String(Math.trunc(this.timePlayed / 60)).padStart(
      2,
      '0'
    );
    const sec: string = String(this.timePlayed % 60).padStart(2, '0');

    this.gameplayTime = `${hours}:${min}:${sec}`;
  }
}
