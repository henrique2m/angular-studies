import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPersonaDevicesComponent } from './digital-persona-devices.component';

describe('DigitalPersonaDevicesComponent', () => {
  let component: DigitalPersonaDevicesComponent;
  let fixture: ComponentFixture<DigitalPersonaDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalPersonaDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPersonaDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
