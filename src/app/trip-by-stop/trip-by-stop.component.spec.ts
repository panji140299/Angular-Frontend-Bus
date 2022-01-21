import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripByStopComponent } from './trip-by-stop.component';

describe('TripByStopComponent', () => {
  let component: TripByStopComponent;
  let fixture: ComponentFixture<TripByStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripByStopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripByStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
