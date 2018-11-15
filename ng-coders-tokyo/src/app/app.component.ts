import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [class.with-border]="withBorder" [style.color]="textColor">{{ title }}</h1>
    <img [src]="imageSrc" />
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  withBorder = true;
}
// DataBinding
// 1. PropertyBinding
// 2. EventBinding
