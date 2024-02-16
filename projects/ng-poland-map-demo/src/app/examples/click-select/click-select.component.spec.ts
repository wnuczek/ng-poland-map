import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickSelectComponent } from './click-select.component';

describe('ClickSelectComponent', () => {
  let component: ClickSelectComponent;
  let fixture: ComponentFixture<ClickSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
