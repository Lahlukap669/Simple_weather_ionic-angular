import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string){
    return this.httpClient.get(`http://api.weatherstack.com/current?access_key=f20dafef5a82133fc42ae04e5294fa3c&query=${city}`);
  }
}

