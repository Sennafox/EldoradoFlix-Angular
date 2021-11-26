import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['home']);
      },
       (error) => {
          alert("Usuário ou senha inválido");
          console.log(error);
      }
    );
  }
}