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
import { EducationalLevel, SchoolInformation } from '@core/interfaces';
import { Country } from '@shared/interfaces';
import { CountriesService } from '@shared/services';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-school-information-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    Select,
  ],
  templateUrl: './school-information-form.component.html',
  styleUrl: './school-information-form.component.scss',
})
export class SchoolInformationFormComponent implements OnInit {
  @Output() valid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() show: boolean = true;
  countries: Country[] = [];
  form: FormGroup = new FormGroup({});
  educationalLevels: EducationalLevel[] = [
    { id: '1', name: 'Primaria' },
    { id: '2', name: 'Secundaria' },
    { id: '3', name: 'Preparatoria' },
    { id: '4', name: 'Universidad' },
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly cs: CountriesService
  ) {}

  ngOnInit(): void {
    this.initSchoolForm();
  }

  initSchoolForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      zipCode: ['', Validators.required],
      // phoneSchool: ['', [Validators.required]],
      educationalLevel: ['', Validators.required],
    });
    this.cs.getAllCountries().subscribe((countries) => {
      this.countries = countries;
    });
    this.subscribeToFormChanges();
  }

  get name() {
    return this.form.get('name') as FormControl;
  }

  get city() {
    return this.form.get('city') as FormControl;
  }

  get state() {
    return this.form.get('state') as FormControl;
  }

  get country() {
    return this.form.get('country') as FormControl;
  }

  get street() {
    return this.form.get('street') as FormControl;
  }

  get neighborhood() {
    return this.form.get('neighborhood') as FormControl;
  }

  get zipCode() {
    return this.form.get('zipCode') as FormControl;
  }

  // get phoneSchool() {
  //   return this.form.get('phoneSchool') as FormControl;
  // }

  get educationalLevel() {
    return this.form.get('educationalLevel') as FormControl;
  }

  errorsClass(control: any) {
    return {
      'ng-invalid': control.invalid,
      'ng-dirty': control.dirty || control.touched,
    };
  }

  subscribeToFormChanges(): void {
    this.form.statusChanges.subscribe((status: FormControlStatus) => {
      console.log(this.educationalLevel.value);
      this.valid.emit(status === 'VALID');
    });
  }

  get schoolInformation() : SchoolInformation {
    return {
      name: this.name.value,
      city: this.city.value,
      state: this.state.value,
      country: this.country.value,
      street: this.street.value,
      neighborhood: this.neighborhood.value,
      zipCode: this.zipCode.value,
      educationalLevel: this.educationalLevel.value,
    }
  }
}
