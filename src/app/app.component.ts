import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome Angular App';
  course: string = 'Course SpringBoot 5 & Angular';
  teacher: string = 'Julio Jaimes R.';
}
