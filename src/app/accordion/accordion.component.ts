import {
  Component,
  Directive,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit,
  AfterContentInit,
  ContentChildren,
  ElementRef,
  ViewContainerRef,
  ViewChild,
  ComponentFactory,
  ComponentFactoryResolver,
} from '@angular/core';
import { AccordionItemComponent } from './item.component';

@Directive({
  selector: '[itemsMenu]'
})
export class ItemsMenuDirective {
  constructor(public viewContainerRef: ViewContainerRef, el: ElementRef) {
    console.log(viewContainerRef, 'view ocnt ref');
    el.nativeElement.innerHTML = 'ffff';
  }
}

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
//   template: `
//     <h3>It's 2022 year!</h3>
//     <ng-template itemsMenu></ng-template>
//     <h1>Hello, World!</h1>
//     <h3>It's 2022 year!</h3>
// `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterViewInit, AfterContentInit {

  items: AccordionItemComponent[] = [];
  // @ViewChildren(AccordionItemComponent) itemsChildren: QueryList<
  //   AccordionItemComponent
  // >;

  @ContentChildren(AccordionItemComponent) itemsChildren: QueryList<AccordionItemComponent>;
  @ViewChild(ItemsMenuDirective) itemsMenuRef!: ItemsMenuDirective;

  constructor(vc: ViewContainerRef, private resolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnInit() {
  }
}
