import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1
      [class.with-border]="withBorder"
      [style.color]="textColor"
      (mouseover)="onTextMouseOver()"
      (mouseout)="onTextMouseOut()"
    >
      {{ title }}
    </h1>
    <button (click)="onButtonClick()">{{ withBorder ? 'Hide' : 'Show' }} Border</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  withBorder = true;

  onTextMouseOver() {
    this.textColor = 'dodgerblue';
  }

  onTextMouseOut() {
    this.textColor = 'tomato';
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
  }
}
// DataBinding
//// 1. PropertyBinding
// 2. EventBinding
