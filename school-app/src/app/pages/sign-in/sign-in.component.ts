import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { SignInService } from './sign-in.service';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CardModule, ButtonModule, TabViewModule, InputTextModule, PasswordModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent {

  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly auth: AuthService) {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  onSubmit(): void {
    this.auth.signInWithEmailAndPassword(this.email.value, this.password.value).subscribe({
      next: () => {
        this.form.reset();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
}
