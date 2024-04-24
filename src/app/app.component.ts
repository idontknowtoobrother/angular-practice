import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import RegisterFormComponent from './components/register-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'register-from-tailwindcss';
}
