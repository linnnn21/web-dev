import { Component,input } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class InputProperties {
  readonly name = input<string>();
}
