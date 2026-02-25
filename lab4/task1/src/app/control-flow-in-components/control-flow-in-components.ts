import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-in-components',
  standalone: true,
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
})
export class ControlFlowInComponents {
  isServerRunning = true;
}