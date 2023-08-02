import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {

  student: any = {};

  @Output() onSaveData: EventEmitter<any> = new EventEmitter<any>();
  
  saveData() {
    this.onSaveData.emit(this.student);
  }
}
