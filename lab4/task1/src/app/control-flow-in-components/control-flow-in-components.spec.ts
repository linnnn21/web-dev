import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowInComponents } from './control-flow-in-components';

describe('ControlFlowInComponents', () => {
  let component: ControlFlowInComponents;
  let fixture: ComponentFixture<ControlFlowInComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowInComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowInComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
