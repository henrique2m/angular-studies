import '../modules/WebSdk';
import { Component, OnInit } from '@angular/core';

import { FingerprintReader, SampleFormat } from '@digitalpersona/devices';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DeviceInfo } from '@digitalpersona/devices/src/devices/fingerprints/device';

@Component({
  selector: 'app-digital-persona-devices',
  templateUrl: './digital-persona-devices.component.html',
  styleUrls: ['./digital-persona-devices.component.css'],
})
export class DigitalPersonaDevicesComponent implements OnInit {
  private reader!: FingerprintReader;

  constructor() {}

  ngOnInit() {
    this.initReader();
  }

  public initReader(): Observable<void> {
    this.reader = new FingerprintReader(new WebSdk.WebChannelOptions({}));

    this.reader.onDeviceConnected = (event) => {
      console.log('onDeviceConnected', event);
    };

    this.reader.onDeviceDisconnected = (event) => {
      console.log('onDeviceDisconnected', event);
    };

    this.reader.onQualityReported = (event) => {
      console.log('onQualityReported', event);
    };

    this.reader.onSamplesAcquired = (event) => {
      console.log('onSamplesAcquired', event.samples[0]);
    };

    this.reader.onErrorOccurred = (event) => {
      console.log('onReaderError', event);
    };

    return from(this.reader.startAcquisition(SampleFormat.PngImage));
  }

  public destroyReader(): Observable<void> {
    return from(this.reader.stopAcquisition()).pipe(
      finalize(() => {
        console.log('Reader destroyed');
        // delete this.reader;
      })
    );
  }

  public getReaderInfo(devUid: string): Observable<DeviceInfo | null> {
    return from(this.reader.getDeviceInfo(devUid));
  }
}
