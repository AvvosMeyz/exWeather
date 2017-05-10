import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service'

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  items: any;
  constructor(public navCtrl: NavController, private WeatherService:WeatherService) {

  }

  ngOnInit(){
    this.getWeather(37.8267,-122.4233);
  };

  getWeather(long,lat){
    this.WeatherService.getWeather(long,lat).subscribe(response => {
      console.log(response);
      this.items = response.hourly.data;

    });
  };

}
