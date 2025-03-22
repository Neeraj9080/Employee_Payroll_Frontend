import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnChanges {
  @Input() employee: any = null;  // Input employee data for editing
  @Output() formSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  // Sample profile images
  profileImages: string[] = [
    'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ewEDWwN5JHdsOiEB1nNJtmb92yqfT3l7eupau1p0JMXsagYeXIlUJnx-AXH8P2MW8A4&usqp=CAU',
    'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIAc7_Ru6eik4CdA2ZtRcgrlRMCSvisH150SbwulwhhBu9jYN0Uj_sBkaw13R6sWnw40&usqp=CAU'
  ];

  formData = {
    name: '',
    profileImage: '',
    gender: '',
    department: [] as string[],
    salary: null,
    startDate: '',
    notes: ''
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employee'] && this.employee) {
      this.formData = { ...this.employee };
    }
  }

  selectImage(image: string) {
    this.formData.profileImage = image;
  }

  toggleDepartment(department: string) {
    const index = this.formData.department.indexOf(department);
    if (index > -1) {
      this.formData.department.splice(index, 1);
    } else {
      this.formData.department.push(department);
    };
  }

    submitForm() {
    this.formSubmit.emit(this.formData);
  }

  cancelForm() {
    this.cancel.emit();
  }
}

