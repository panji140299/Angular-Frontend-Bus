import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripScheduleComponent } from './trip-schedule.component';

describe('TripScheduleComponent', () => {
  let component: TripScheduleComponent;
  let fixture: ComponentFixture<TripScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
