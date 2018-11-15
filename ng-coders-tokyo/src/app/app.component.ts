import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngClass]="{
      'with-border': withBorder,
      'other-class': true
    }">{{ title }}</h1>
    <img [src]="imageSrc">
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  backgroundColor = 'black';

  styleObj = {color: this.textColor, background: this.backgroundColor};

  withBorder = true;
}
// DataBinding
// 1. PropertyBinding
// 2. EventBinding
