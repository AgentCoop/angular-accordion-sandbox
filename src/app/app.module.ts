import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent, ItemsMenuDirective } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/item.component';

@NgModule({
  declarations: [AppComponent, AccordionComponent, AccordionItemComponent, ItemsMenuDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
