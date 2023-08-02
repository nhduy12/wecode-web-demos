import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'two-ways-binding';

  studentList: any = [];

  saveData($event: any) {
    this.studentList.push($event);
  }

}
