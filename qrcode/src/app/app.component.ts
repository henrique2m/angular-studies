import { Component } from '@angular/core';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'sample';
}