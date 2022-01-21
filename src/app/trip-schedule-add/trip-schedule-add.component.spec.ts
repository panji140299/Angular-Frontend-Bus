import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripScheduleAddComponent } from './trip-schedule-add.component';

describe('TripScheduleAddComponent', () => {
  let component: TripScheduleAddComponent;
  let fixture: ComponentFixture<TripScheduleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripScheduleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
