import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPolandMapPointerComponent } from './pointer.component';

describe('NgPolandMapRegionComponent', () => {
  let component: NgPolandMapPointerComponent;
  let fixture: ComponentFixture<NgPolandMapPointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgPolandMapPointerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgPolandMapPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
