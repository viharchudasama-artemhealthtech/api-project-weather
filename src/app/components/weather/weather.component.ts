import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html'
})
export class WeatherComponent {

  city = '';
  weather: any;
  error = '';

  constructor(private weatherService: WeatherService) { }

  fetchWeather() {
    this.weatherService.getLocation(this.city)
      .pipe(
        switchMap(loc =>
          this.weatherService.getWeatherByCoords(
            loc.latitude,
            loc.longitude,
            loc.name
          )
        )
      )
      .subscribe({
        next: data => {
          this.weather = data;
          this.error = '';
        },
        error: (err) => {
          this.error = err;
          this.weather = null;
        }
      });
  }
}
