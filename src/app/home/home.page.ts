import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public res;
  public resCurrent;

  constructor(private weatherAPI: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData();
    this.getWeatherDataCurrent();
  }

  getWeatherData() {
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
    });
  }
  getWeatherDataCurrent() {
    this.weatherAPI.getWeatherDataCurrent().subscribe((response) => {
      this.resCurrent = response;
    });
  }

  doRefresh(event) {
    console.log('Ion-refresh running...');
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res);
      console.log('done reloading weather data');
      event.target.complete();
    });
    this.weatherAPI.getWeatherDataCurrent().subscribe((response) => {
      this.resCurrent = response;
      console.log(this.resCurrent);
      console.log('done reloading weather current data');
      event.target.complete();
    });
  }
}
