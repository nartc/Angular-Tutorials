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
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  title = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/200';

  textColor = 'tomato';
  withBorder = true;

  ngOnInit(): void {
    console.log('OnInit ran');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges ran', { changes });
  }
  ngOnDestroy(): void {
    console.log('OnDestroy ran');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked ran');
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
  }
}
