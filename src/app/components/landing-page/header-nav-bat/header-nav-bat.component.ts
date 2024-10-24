import { Component } from '@angular/core';

@Component({
  selector: 'app-header-nav-bat',
  templateUrl: './header-nav-bat.component.html',
  styleUrl: './header-nav-bat.component.scss'
})
export class HeaderNavBatComponent {
  isMenuOpen: boolean = false;

  // Esta función alterna el estado del menú
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
