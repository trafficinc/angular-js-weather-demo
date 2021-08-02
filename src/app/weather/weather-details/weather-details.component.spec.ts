import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forecast } from 'src/app/core/interfaces/forecast';

import { WeatherDetailsComponent } from './weather-details.component';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ WeatherDetailsComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(WeatherDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    const comp = new WeatherDetailsComponent();
    expect(comp).toBeTruthy();
  });

  it('should add forecast', () => {
    const comp = new WeatherDetailsComponent();
    const forecast : Forecast = {
      conditions: 'cloudy',
      wind: {
        speed: 6,
        direction: 'north-west'
      },
      temperature: {
        day: {
          min: 14,
          max: 18
        },
        night: {
          min: 5,
          max: 8
        }
      }
    };

    comp.forecast = forecast;
    expect(comp.forecast).toBe(forecast);
  });

});
