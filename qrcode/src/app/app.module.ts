import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { DigitalPersonaDevicesComponent } from './digital-persona-devices/digital-persona-devices.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [AppComponent, DigitalPersonaDevicesComponent, QrCodeComponent],
  imports: [BrowserModule, NgxQRCodeModule, FormsModule, QRCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
