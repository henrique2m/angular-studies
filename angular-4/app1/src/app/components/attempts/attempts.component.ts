import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Heart } from 'src/app/shared/heart.module';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css'],
})
export class AttemptsComponent implements OnInit, OnChanges {
  @Input() public attempts!: number;

  public hearts: Heart[] = [new Heart(true), new Heart(true), new Heart(true)];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    const { attempts, hearts } = this;

    if (attempts !== hearts.length) {
      let index = hearts.length - attempts;

      hearts[index - 1].filled = false;
    }
  }
}
