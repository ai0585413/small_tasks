import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  employees : any[] = [
    {empNmae: "John", empNumber:101, empDept:"IT"},
    {empNmae: "Era", empNumber:102, empDept:"HR"},
    {empNmae: "Mina", empNumber:103, empDept:"Developer"},
  ]

  companyList :string[]= ['Atos', 'Capgemini', 'Accenture', 'Tcs'];

}
