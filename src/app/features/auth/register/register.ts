import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,16}$/)]),
    confirm: new FormControl('', [Validators.required]), 
    role: new FormControl('')
  }, { validators: diffPasswordValidator });

  register() {
    const { name, email, password } = this.form.value;
    if (this.auth.register(name!, email!, password!, false)) {
      this.router.navigateByUrl('/');
    }
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirm');
  }


}

export const diffPasswordValidator: ValidatorFn = (
  control: AbstractControl): ValidationErrors | null => {
  const diff = (control.value.password !== control.value.confirm);
  return diff ? { diffPassword: true } : null;
};

