import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {


  @Input() collapsed = false;
  @Input() screenWidth = 0;


  getBodyClass(): string {
    let stylesClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      stylesClass = 'body-trimmed';

    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      stylesClass = 'body-md-screen';

    }
    return stylesClass;

  }
}
