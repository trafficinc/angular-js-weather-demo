import { Component, OnInit } from '@angular/core';
import { City } from '../core/interfaces/city';
import { CityService } from '../core/services/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  providers: [CityService],
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  cities: City[] = [];
  //cities: Array<City>;
  chosenCity: any;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    //this.cities = this.cityService.getCities();
    //this.cityService.getCities().subscribe(cities => (this.cities = cities));
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
    .subscribe(cities => (this.cities = cities));
  }

  onChooseCity(index: number): void {
    //console.log(index);
    this.chosenCity = index;
  }

}
