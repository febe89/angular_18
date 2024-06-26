import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // string,boolean,number,date

  courseName: string = 'angular 18';
  inputType = 'checkbox';
  stateName: string = 'palestine';
  rollNumber: number = 123;
  myClassName: string = 'bg-primary';

  isIndian: boolean = true;
  currentDate: Date = new Date();
  firstName = signal('shaikh');
  constructor() {}

  changeCourseName() {
    this.courseName = 'React js';
    this.firstName.set('yumna');
  }
  showAlert(message: string) {
    alert(message);
    console.log(message);
  }
}
