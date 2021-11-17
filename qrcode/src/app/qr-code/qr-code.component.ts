import { Component, OnInit } from '@angular/core';
import { NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css'],
})
export class QrCodeComponent implements OnInit {
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'sample';

  constructor() {}

  ngOnInit(): void {}
}
