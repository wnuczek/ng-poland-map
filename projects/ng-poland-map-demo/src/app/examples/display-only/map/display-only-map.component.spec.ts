import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOnlyMapComponent } from './display-only-map.component';

describe('DisplayOnlyMapComponent', () => {
  let component: DisplayOnlyMapComponent;
  let fixture: ComponentFixture<DisplayOnlyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayOnlyMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayOnlyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
