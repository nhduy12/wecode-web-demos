import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  buttons: any = [

  ];
  
  logValue(e: any) {
    console.log(e);
    
  }
}
