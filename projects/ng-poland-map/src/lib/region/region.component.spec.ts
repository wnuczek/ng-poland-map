import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPolandMapRegionComponent } from './region.component';

describe('NgPolandMapRegionComponent', () => {
  let component: NgPolandMapRegionComponent;
  let fixture: ComponentFixture<NgPolandMapRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgPolandMapRegionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgPolandMapRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
