import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringsWithSignalsComponent } from './filterings-with-signals.component';

describe('FilteringsWithSignalsComponent', () => {
  let component: FilteringsWithSignalsComponent;
  let fixture: ComponentFixture<FilteringsWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteringsWithSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteringsWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
