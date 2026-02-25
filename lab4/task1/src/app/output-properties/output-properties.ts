import { Component } from '@angular/core';
import { Child } from '../child';

@Component({
  selector: 'app-output-properties',
  standalone: true,
  imports: [Child],
  template: `
    <app-child (addItemEvent)="addItem($event)"></app-child>

    <p>All the way down {{ items.length }}</p>
  `,
})
export class OutputProperties {

  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}