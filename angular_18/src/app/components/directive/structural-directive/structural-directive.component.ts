import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css',
})
export class StructuralDirectiveComponent {
  constructor(private router: Router) {}
  isDivVisible: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  countryVal: string = 'palestine';
  cityArray: string[] = ['Aurangabad', 'Bombay', 'Hyderabad', 'Pune'];
  studentList: any[] = [
    { name: 'yumna', city: 'aurangabad', age: 2.5, isInActive: false },
    { name: 'shaikh', city: 'aurangabad', age: 2.5, isInActive: true },
    { name: 'aamena', city: 'aurangabad', age: 2.5, isInActive: false },
  ];
  showDiv1() {
    this.isDivVisible = true;
  }
  hideDiv1() {
    this.isDivVisible = false;
  }
  isDiv2Visible: boolean = false;

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
  navigateToEmp() {
    this.router.navigateByUrl('add-emp');
  }
}
