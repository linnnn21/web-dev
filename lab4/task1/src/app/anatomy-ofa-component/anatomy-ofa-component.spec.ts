import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomyOfaComponent } from './anatomy-ofa-component';

describe('AnatomyOfaComponent', () => {
  let component: AnatomyOfaComponent;
  let fixture: ComponentFixture<AnatomyOfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnatomyOfaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomyOfaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
