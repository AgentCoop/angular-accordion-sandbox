import { Component, Input, AfterViewInit, ElementRef, ViewContainerRef, ViewRef } from '@angular/core';

@Component({
  selector: 'accordion-item',
  templateUrl: './item.component.html',
  styleUrls: []
})
export class AccordionItemComponent implements AfterViewInit {
  @Input() public heading: string;
  @Input() public subheading = '';
  @Input() item: AccordionItemComponent;

  constructor() {

  }

  ngAfterViewInit() {
  }
}
