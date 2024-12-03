import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  handleLogin() {
    const credentials = { username: this.username, password: this.password };

    this.authService.login(credentials).subscribe(
      (response) => {
        if (response.message === 'Login successful') {
          alert('Welcome!');
          this.router.navigate(['/races-list']);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error) => {
        this.errorMessage = 'Failed to connect to the server.';
        console.error(error);
      }
    );
  }
}
