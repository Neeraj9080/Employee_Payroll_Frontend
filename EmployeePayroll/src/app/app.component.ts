import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from "./employee-form/employee-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [EmployeeFormComponent, CommonModule]
})
export class AppComponent {
  title = 'App2';
  showForm = false;

  employees = [
    { 
      profileImage: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
      name: 'Amarpa Shashanka Keethi Kumar', 
      gender: 'Female', 
      department: ['Sales', 'HR', 'Finance'], 
      salary: 10000, 
      startDate: new Date('2019-10-29'),
      notes: 'Top performer'
    },
    { 
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIAc7_Ru6eik4CdA2ZtRcgrlRMCSvisH150SbwulwhhBu9jYN0Uj_sBkaw13R6sWnw40&usqp=CAU',
      name: 'Mohammad Salman Iqbal Shaikh', 
      gender: 'Female', 
      department: ['Sales', 'HR', 'Finance'], 
      salary: 10000, 
      startDate: new Date('2019-10-29'),
      notes: 'Great team player'
    },
    { 
      profileImage: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png',
      name: 'Bubere Qais Mohammad Muzaffar', 
      gender: 'Male', 
      department: ['Sales', 'HR', 'Finance'], 
      salary: 10000, 
      startDate: new Date('2019-10-29'),
      notes: 'Great team player'
    },
    { 
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ewEDWwN5JHdsOiEB1nNJtmb92yqfT3l7eupau1p0JMXsagYeXIlUJnx-AXH8P2MW8A4&usqp=CAU',
      name: 'Amarpa Shashanka Keerthi Kumar', 
      gender: 'Male', 
      department: ['Sales', 'HR', 'Finance'], 
      salary: 10000, 
      startDate: new Date('2019-10-29'),
      notes: 'Great team player'
    },
    { 
      profileImage: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
      name: 'Mohammad Salman Iqbal Shaikh', 
      gender: 'Female', 
      department: ['Sales', 'HR', 'Finance'], 
      salary: 10000, 
      startDate: new Date('2019-10-29'),
      notes: 'Great team player'
    }
  ];

  editingEmployee: any = null;     // Store the employee being edited
  editingIndex: number | null = null;  // Index of the employee being edited

  // Handle form submission
  onFormSubmit(employee: any) {
    if (this.editingEmployee !== null) {
      // Update existing employee
      this.employees[this.editingIndex!] = { ...employee };
      this.editingEmployee = null;
      this.editingIndex = null;
    } else {
      // Add new employee
      this.employees.push(employee);
    }
    this.showForm = false;   // Hide the form after submission
  }

  // Delete employee
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);  // Remove employee by index
  }

  // Edit employee
  editEmployee(emp: any, index: number) {
    this.editingEmployee = { ...emp };   // Clone the employee for editing
    this.editingIndex = index;           // Store the index for later update
    this.showForm = true;                // Show the form with pre-filled data
  }

  // Add new employee
  addNewEmployee() {
    this.editingEmployee = null;         // Clear any editing data
    this.editingIndex = null;            
    this.showForm = true;                // Show empty form for new employee
  }
}
