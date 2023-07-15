import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  @Input() list: any = [];
  @Output() onStudentSelected: EventEmitter<any> = new EventEmitter<any>();
  selectStudent(student: any) {
    this.onStudentSelected.emit(student);
  }
}
