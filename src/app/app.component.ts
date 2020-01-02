import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shribalaji';
  constructor() {
  }
scroll(abc) {
  abc.scrollIntoView();
  console.log('called', abc);
}
}
