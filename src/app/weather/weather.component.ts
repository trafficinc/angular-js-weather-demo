import { Component, OnInit } from '@angular/core';
import { City } from '../core/interfaces/city';
import { CityService } from '../core/services/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  cities: Array<City> = [];
  chosenCity: any;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }
  onChooseCity(index: number): void {
    //console.log(index);
    this.chosenCity = index;
  }

}
