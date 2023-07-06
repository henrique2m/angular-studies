import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      personForm: this.personForm(),
      addressForm: this.addressForm(),
    });
  }

  personForm(): FormGroup {
    const { required } = Validators;
    return this.formBuilder.group({
      name: '',
      lastName: '',
      email: ['', required],
    });
  }

  addressForm(): FormGroup {
    return this.formBuilder.group({
      city: '',
      street: '',
      number: '',
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
