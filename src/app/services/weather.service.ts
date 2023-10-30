import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    let lat = 10.776889;
    let lon = 106.700897;
    let apiId = '7f56317c7aee1e60c731391d37a80bc1';
    // let queryString = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`;
    // let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`;
    let queryString = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiId}`;
    return this.http.get(queryString);
  }
  getWeatherDataCurrent(): Observable<any> {
    let lat = 10.776889;
    let lon = 106.700897;
    let apiId = '7f56317c7aee1e60c731391d37a80bc1';
    let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`;
    return this.http.get(queryString);
  }
}
