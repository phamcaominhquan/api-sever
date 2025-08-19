import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,

    MatIconButton,
    MatIcon,

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {
  }
  navigateToHome(){
    this.router.navigate(['/home']);
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
