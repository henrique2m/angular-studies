import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public gameInProgress: boolean = true;
  public typeEndOfTheGame!: string;

  public endOfTheGame(type: string): void {
    console.log(type);
    this.gameInProgress = false;
    this.typeEndOfTheGame = type;
  }

  public startGame(): void {
    this.gameInProgress = true;
    this.typeEndOfTheGame = '';
  }
}
