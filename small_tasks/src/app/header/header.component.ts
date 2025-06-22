import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logos: string[] = [
    '/assets/logo1.png',
    '/assets/logo2.png',
    '/assets/logo3.png',
    
  ];

  currentIndex =0;
  currentLogo = this.logos[this.currentIndex];
  changeLogo(){
    this.currentIndex =(this.currentIndex+1)%this.logos.length;
    this.currentLogo = this.logos[this.currentIndex];
  }
  menuVisible = false;

  apps = [
    { name: 'Directives', icon: '/assets/directives.png', link:'/directives' },
    { name: 'Bindings', icon: '/assets/bindings.png', link:'/bindings'},
    { name: 'Signals', icon: '/assets/Signals.png',  link:'/signals' },
    { name: 'Pipes', icon: '/assets/Pipes.png',  link:'/pipes' },
    { name: 'Decorators', icon: '/assets/Signals.png',  link:'/decorators' },
    
  ];

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }


}
