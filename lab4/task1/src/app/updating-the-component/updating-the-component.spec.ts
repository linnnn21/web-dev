import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingTheComponent } from './updating-the-component';

describe('UpdatingTheComponent', () => {
  let component: UpdatingTheComponent;
  let fixture: ComponentFixture<UpdatingTheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatingTheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatingTheComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
