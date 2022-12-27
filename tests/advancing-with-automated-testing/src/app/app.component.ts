import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular testing';
  public likes = 0;

  public like(): void {
    this.likes++;
  }

  get generatedPhotos(): string[] {
    return '1234563412312312331233123123345447312345223'.split('');
  }
}
