import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: ` Username: {{ username }} `,
})
export class User{
  username = 'YoungTech';
}
Component({
  selector: 'app-component-composition',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [User],
})
export class ComponentComposition {}
