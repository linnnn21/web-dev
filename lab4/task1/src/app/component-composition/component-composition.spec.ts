import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComposition } from './component-composition';

describe('ComponentComposition', () => {
  let component: ComponentComposition;
  let fixture: ComponentFixture<ComponentComposition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentComposition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentComposition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
