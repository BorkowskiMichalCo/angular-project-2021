import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  errorMessage = '';
  error: { name: string; message: string } = { name: '', message: '' };

  constructor(private authservice: AuthService, private router: Router) {}

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  ngOnInit(): void {}

  login() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice
        .loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/info']);
        })
        // tslint:disable-next-line: variable-name
        .catch(_error => {
          this.error = _error;
          this.router.navigate(['/login']);
        });
    }
  }
  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = 'Please enter email';
      return false;
    }
    if (password.lenght === 0) {
      this.errorMessage = 'Enter password';
      return false;
    }
    if (password.lenght < 6) {
      this.errorMessage = 'password shuld be at least 6 char';
      return false;
    }
    this.errorMessage = '';
    return true;
  }
}
