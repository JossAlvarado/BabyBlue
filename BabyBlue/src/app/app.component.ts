import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "BabyBlue"
  user = {
    email: '',
    password: ''
  };

  login() {
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('Iniciar sesión');
    console.log('Email:', this.user.email);
    console.log('Contraseña:', this.user.password);
  }
}
