import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-bindings',
  imports: [FormsModule, RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  //interpolution
  name:String= "Angular";
  value: String ="Enter your name";
  data = "";
  
  onSave(){
    alert("Data saved succesfully");
  }
  onChange(){
    alert("List has been saved");
  }
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
    { name: 'Directives', icon: '/assets/directives.png' },
    { name: 'Bindigs', icon: '/assets/bindings.png' },
    { name: 'Signals', icon: '/assets/Signals.png' },
    { name: 'Decorators', icon: '/assets/Decorators.png' },
    { name: 'Pipes', icon: '/assets/Pipes.png' },
    { name: 'Forms', icon: '/assets/Forms.png' },
  ];

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }


}
