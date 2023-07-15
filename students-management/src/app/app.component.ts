import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'students-management';

  students = [
    {
      firstName: "Duy",
      lastName: "Nguyen",
      studentNumber: "15000001",
      email: "duynguyen.hd.2903@gmail.com",
      avatar: "#"
    },
    {
      firstName: "Duy",
      lastName: "Nguyen 2",
      studentNumber: "15000002",
      email: "duynguyen.hd.29032@gmail.com",
      avatar: "#"
    },
    {
      firstName: "Duy",
      lastName: "Nguyen 3",
      studentNumber: "15000003",
      email: "duynguyen.hd.29033@gmail.com",
      avatar: "#"
    },
    {
      firstName: "Duy",
      lastName: "Nguyen 4",
      studentNumber: "15000004",
      email: "duynguyen.hd.29034@gmail.com",
      avatar: "#"
    }
  ];
  selectedStudent: any;

  catchSelectedStudent(student: any) {
    this.selectedStudent = student;
  }
}
