import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PersonalInformationFormComponent } from '@components/personal-information-form/personal-information-form.component';
import { SchoolInformationFormComponent } from '@components/school-information-form/school-information-form.component';
import { PersonalInformation, SchoolInformation } from '@core/interfaces';
import { SignUp } from './sign-up.types';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  imports: [
    CommonModule,
    ButtonModule,
    StepsModule,
    CardModule,
    DividerModule,
    SchoolInformationFormComponent,
    PersonalInformationFormComponent,
],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {

  steps: MenuItem[] | undefined;
  currtentStep: MenuItem | undefined;
  stepIndex = 0;
  isCurrentFormInvalid = true;

  @ViewChild('personal') personalInformationForm: PersonalInformationFormComponent;
  @ViewChild('school') schoolInformationForm: SchoolInformationFormComponent;

  constructor(private readonly signUpService: SignUpService) {}

  ngOnInit(): void {
    this.initSteps();
  }

  private initSteps(): void {
    this.steps = [
      { label: 'Información personal', id: '1' },
      { label: 'Escuela', id: '2' },
      { label: 'Confirmación', id: '3' },
    ];
    this.updateCurrentStep();
  }

  get isFirtsStep(): boolean {
    return this.stepIndex === 0;
  }

  get isLastStep(): boolean {
    return this.stepIndex === this.steps.length - 1;
  }

  nextStep(): void {
    
    if (!this.isLastStep && !this.isCurrentFormInvalid) {
      this.stepIndex++;
    } else {
      this.onComplete();
    }
    this.checkNextForm();
    this.updateCurrentStep();
  }

  previousStep(): void {
    if (this.stepIndex > 0) {
      this.stepIndex--;
    }
    this.updateCurrentStep();
  }

  private updateCurrentStep(): void {
    this.currtentStep = this.steps[this.stepIndex];
  }

  onValid(valid: boolean, step: number): void {
    if (step === this.stepIndex) {
      this.isCurrentFormInvalid = !valid;
    }
  }

  private checkNextForm(): void {
    switch (this.stepIndex) {
      case 0:
        this.isCurrentFormInvalid = this.personalInformationForm.form.invalid;
        break;
      case 1:
        this.isCurrentFormInvalid = this.schoolInformationForm.form.invalid;
        break;
    }
  }

  private onComplete(): void {
    const personalInformation: PersonalInformation = this.personalInformationForm.personalInformation;
    const schoolInformation: SchoolInformation = { ...this.schoolInformationForm.schoolInformation, country: this.schoolInformationForm.country.value.name.common };
    const signUp: SignUp = { personalInformation, schoolInformation };
    this.signUpService.saveSchool(signUp).subscribe(() => {
      console.log('School saved');
    }); 
    //TODO: Enviar información al servidor
  }
}
