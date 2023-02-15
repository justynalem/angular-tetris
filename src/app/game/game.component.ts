import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface HistoryItem {
  displayTime: string;
  time: number;
  move: string;
}
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
  public gameplayTime: string = '00:00';
  public gameStatus: string = 'READY TO START';
  public isGameOver: boolean = false;
  public interval: any;
  public gameHistory: Array<HistoryItem> = [];
  public isGameActive = false;
  public historyOrder = 'ASC';
  public moves = [
    'move left',
    'move right',
    'move down',
    'rotate',
    'drop',
    'Game over',
    'Game started',
    'Game paused',
    'Line cleared',
  ];
  public moveFilter = 'all moves';

  public onLineCleared() {
    this.score++;
    this.addToHistory('Line cleared');
  }
  public onGameOver() {
    this.isGameActive = false;
    this.pauseTimer();
    this.gameStatus = 'GAME OVER';
    this.addToHistory('Game over');
  }

  public onExitClick() {
    this.onGameExit.emit(true);
  }

  public gameStarted() {
    this.isGameActive = true;
    this.gameStatus = 'GAME ON!';
    this.startTimer();
    this.addToHistory('Game started');
  }

  public gameStopped() {
    this.isGameActive = false;
    this.gameStatus !== 'READY TO START'
      ? (this.gameStatus = 'GAME PAUSED')
      : this.gameStatus;
    this.pauseTimer();
    this.addToHistory('Game paused');
  }

  public addToHistory(move: string) {
    this.gameHistory = [
      ...this.gameHistory,
      {
        displayTime: this.gameplayTime,
        move: move,
        time: new Date().getTime(),
      },
    ];
  }

  public gameReset() {
    this.timePlayed = 0;
    this.score = 0;
    this.displayTime();
    this.gameHistory = [];
    this.isGameActive
      ? (this.gameStatus = 'GAME ON!') && this.addToHistory('Game started')
      : (this.gameStatus = 'READY TO START');
  }

  public startTimer() {
    if (this.interval) {
      this.pauseTimer();
    }
    this.interval = setInterval(() => {
      this.timePlayed++;
      this.displayTime();
    }, 1000);
  }

  public pauseTimer() {
    clearInterval(this.interval);
  }

  public changeOrder(order: string) {
    this.historyOrder = order;
  }

  public displayTime() {
    const min: string = String(Math.trunc(this.timePlayed / 60)).padStart(
      2,
      '0'
    );
    const sec: string = String(this.timePlayed % 60).padStart(2, '0');

    this.gameplayTime = `${min}:${sec}`;
  }
}
