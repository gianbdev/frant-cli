import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service'; // Asegúrate de tener un servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //loginForm: FormGroup = this.fb.group({}); // Inicialización
  //loginForm!: FormGroup;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        (response) => {
          //console.log('Respuesta del login:', response); // Verifica la respuesta completa
          const token = response.data.token;
          localStorage.setItem('token', token);
          console.log('Token almacenado:', localStorage.getItem('token')); // Verifica si el token se almacena
          this.router.navigate(['/home']);
        },
        (error) => {
          this.errorMessage = 'Credenciales inválidas o error en el servidor';
          console.error('Error en el login:', error); // Verifica el error aquí
        },
        () => {
          this.isSubmitting = false;
        },
      );
    }
  }
}
