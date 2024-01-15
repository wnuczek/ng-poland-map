import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPolandMapComponent } from './ng-poland-map.component';

describe('NgPolandMapComponent', () => {
  let component: NgPolandMapComponent;
  let fixture: ComponentFixture<NgPolandMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgPolandMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgPolandMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
