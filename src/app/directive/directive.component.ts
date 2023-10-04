import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  listCourse: string[] = ['Typescrip', 'Javascript', 'Java SE', 'C#', 'PHP', 'CPP']
  buttonFlag : boolean = true;
  buttonTitle: string = 'Activated';

  setShowHide(): void {
    this.buttonFlag = (this.buttonFlag == true) ? false : true
  }
}
