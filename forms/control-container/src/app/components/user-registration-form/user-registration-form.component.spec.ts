import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MockComponent } from 'ng-mocks';

import { UserRegistrationFormComponent } from './user-registration-form.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressFormComponent } from '../address-form/address-form.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { PersonFormComponent } from '../person-form/person-form.component';

describe('UserRegistrationFormComponent', () => {
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserRegistrationFormComponent,
        MockComponent(AddressFormComponent),
        MockComponent(ErrorMessageComponent),
        MockComponent(PersonFormComponent),
      ],
      providers: [FormBuilder],
      imports: [ReactiveFormsModule, BrowserModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with person and address sub-forms', () => {
    component.ngOnInit();
    const { form } = component;

    Object.keys(form.controls).forEach((key) => {
      expect(form.get(key) instanceof FormGroup)
        .withContext(`${key} is not FormGroup`)
        .toBe(true);
    });
  });

  it('should initialize personForm with empty values', () => {
    const personForm = component.personForm();
    Object.keys(personForm.controls).forEach((key) => {
      expect(personForm.get(key)?.value)
        .withContext(`${key} field is not empty`)
        .toBe('');
    });
  });

  it('should set email field as required in personForm', () => {
    const personForm = component.personForm();
    expect(personForm.get('email')?.validator).toBe(Validators.required);
  });

  it('should initialize addressForm with empty values', () => {
    const addressForm = component.addressForm();
    Object.keys(addressForm.controls).forEach((key) => {
      expect(addressForm.get(key)?.value)
        .withContext(`${key} field is not empty`)
        .toBe('');
    });
  });
});
