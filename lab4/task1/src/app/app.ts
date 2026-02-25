import { Component, OutputEmitterRef, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Introduction } from './introduction/introduction';
import { AnatomyOfaComponent } from './anatomy-ofa-component/anatomy-ofa-component';
import { UpdatingTheComponent } from './updating-the-component/updating-the-component';
import { ComponentComposition } from './component-composition/component-composition';
import { ControlFlowInComponents } from './control-flow-in-components/control-flow-in-components';
import { For } from './for/for';
import { PropertyBinding } from './property-binding/property-binding';
import { EventHandling } from './event-handling/event-handling';
import { InputProperties } from './input-properties/input-properties';
import { OutputOptions } from '@angular/core';
import { OutputProperties } from './output-properties/output-properties';
import { DeferrableViews } from './deferrable-views/deferrable-views';
import { Child } from './child'; 
import { ParentP } from './input-properties-parent';
import { OperatorSubscriber } from 'rxjs/internal/operators/OperatorSubscriber';
import { OptimizingImages } from './optimizing-images/optimizing-images';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Introduction,AnatomyOfaComponent, UpdatingTheComponent,ComponentComposition,ControlFlowInComponents,For,PropertyBinding,EventHandling,InputProperties,
    OutputProperties,Child,ParentP,OptimizingImages
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task1');
}
