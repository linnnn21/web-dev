import { Component } from '@angular/core';
import { Comments } from '../comments/comments';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [Comments],
  template: `
    <h1>How I feel about Angular</h1>

    @defer {
      <app-comments />
    } @placeholder {
      <p>Loading comments...</p>
    }
  `,
})
export class DeferrableViews {}