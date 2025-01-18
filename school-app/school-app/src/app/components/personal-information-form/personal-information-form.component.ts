import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlStatus,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonalInformation } from '@core/interfaces';
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-information-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatePicker,
    InputTextModule,
  ],
  templateUrl: './personal-information-form.component.html',
  styleUrl: './personal-information-form.component.scss',
})
export class PersonalInformationFormComponent implements OnInit{

  form: FormGroup;
  @Input() show: boolean = true;
  @Output() valid: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      lastNames: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
    this.subscribeToFormChanges();
  }

  get lastNames(): FormControl {
    return this.form.get('lastNames') as FormControl;
  }

  get birthdate(): FormControl {
    return this.form.get('birthdate') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  errorsClass(control: any) {
    return {
      'ng-invalid': control.invalid,
      'ng-dirty': control.dirty || control.touched,
    };
  }

  subscribeToFormChanges(): void {
    this.form.statusChanges.subscribe((status: FormControlStatus) => {
      this.valid.emit(status === 'VALID');
    });
  }

  get personalInformation() : PersonalInformation {
    return {
      names: this.name.value,
      lastNames: this.lastNames.value,
      bornDate: this.birthdate.value,
      email: this.email.value,
      phoneNumber: this.phone.value,
    }
  }
}
