import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormControlStatus,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-school-settings-form',
  imports: [
    CommonModule,
    ButtonModule,
    StepsModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './school-settings-form.component.html',
  styleUrl: './school-settings-form.component.scss',
})
export class SchoolSettingsFormComponent implements OnInit {
  
  @Output() valid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() show: boolean = true;
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      programs: this.fb.array([], [Validators.required]), // FormArray inicializado
    });
    this.subscribeToFormChanges();
  }

  get programs(): FormArray {
    return this.form.get('programs') as FormArray;
  }

  addProgram(): void {
    const programsLength = this.programs.length;
    const program = this.fb.group({
      name: [`Programa - ${programsLength}`, Validators.required],
      description: ['', Validators.required],
      abbreviation: ['', Validators.required],
    });
    this.programs.push(program);
  }

  getControlsProgramByIndex(index: number, controlName: string): FormControl {
    return this.programs.at(index).get(controlName) as FormControl;
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
}
