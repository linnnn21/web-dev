import { Component } from '@angular/core';

@Component({
  selector: 'app-updating-the-component',
  template: ` Hello {{ city }}, {{ 1 + 1 }} `,
})
export class UpdatingTheComponent {
  city = 'San Francisco';
}
