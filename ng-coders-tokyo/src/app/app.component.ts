import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [class.with-border]="withBorder" [style.color]="textColor">{{ title }}</h1>
    <button (click)="onButtonClick()">{{ withBorder ? 'Hide' : 'Show' }} Border</button>
    <app-hello [text]="title" (buttonClicked)="onButtonClickedFromHello($event)"></app-hello>
    <app-hi></app-hi>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  title = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  withBorder = true;

  onButtonClickedFromHello(event: string) {
    this.title = event;
  }

  ngOnInit(): void {
    console.log('Parent OnInit ran');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Parent OnChanges ran', { changes });
  }
  ngOnDestroy(): void {
    // console.log('Parent OnDestroy ran');
  }
  ngAfterViewInit(): void {
    // console.log('Parent AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    // console.log('Parent AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    // console.log('Parent AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    // console.log('Parent AfterContentChecked ran');
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
    this.title = 'Changed';
  }
}
