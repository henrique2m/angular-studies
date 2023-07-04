import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    UserRegistrationFormComponent,
    AddressFormComponent,
    ErrorMessageComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
