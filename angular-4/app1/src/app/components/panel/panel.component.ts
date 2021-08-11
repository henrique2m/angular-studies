import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Phrase } from 'src/app/shared/phrase.module';
import { PHRASES } from './phrase.mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public phrases: Phrase[] = PHRASES;
  public instruction: string = 'Traduza a frase:';
  public userResponse: string = '';
  public round: number = 0;
  public roundPhrase!: Phrase;
  public progress: number = 0;
  public userError: string = '';
  public alertError: string = '';
  public attempts: number = 3;

  @Output() public endOfTheGame: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.handleUpdateRound();
  }

  ngOnInit(): void {}

  handleUserResponse(input: Event): void {
    this.userResponse = (<HTMLInputElement>input.target).value;
  }

  handleVerifyUserResponse(): void {
    if (this.roundPhrase.phrasePtBr !== this.userResponse) {
      this.alertError = 'alert alert-danger';
      this.userError = 'A tradução está errada.';

      this.attempts--;

      if (this.attempts === -1) {
        this.endOfTheGame.emit('defeat');
      }
      return;
    }

    this.round++;

    if (this.round === 4) {
      this.progress = 100;
      this.endOfTheGame.emit('winning');
      return;
    }

    this.handleUpdateRound();
    this.progress = this.progress + 100 / this.phrases.length;
  }

  handleUpdateRound(): void {
    this.roundPhrase = this.phrases[this.round];
    this.userResponse = '';
    this.alertError = '';
    this.userError = '';
  }
}
