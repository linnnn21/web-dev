import { Component } from '@angular/core';
import { InputProperties } from './input-properties/input-properties';

@Component({
  selector: 'app-parentp',
  standalone: true,
  imports: [InputProperties],
  template: `
    <app-input-properties [name]="'YoungTech'"></app-input-properties>
  `,
})
export class ParentP {}