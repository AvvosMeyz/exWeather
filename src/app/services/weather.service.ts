import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class WeatherService{
  http:any;
  baseUrl: String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'https://api.darksky.net/forecast/a02fab26d2ab51b008944a6f1dd6d645';
  }

  getWeather(long, lat){
    return this.http.get(this.baseUrl+'/'+long+','+lat).map(res => res.json())
  }
}
