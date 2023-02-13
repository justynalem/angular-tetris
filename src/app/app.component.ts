import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tetris';

  public readyToPlay = false;

  public onFormCompleted(playerName: string) {
    if (playerName) {
      this.readyToPlay = true;
    }
  }
}
