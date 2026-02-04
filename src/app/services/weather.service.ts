import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service is available app-wide (DI magic)
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // Step 1: Get latitude & longitude from city name
  getLocation(city: string): Observable<any> {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    return this.http.get<any>(url).pipe(
      map(res => {
        if (!res.results?.length) {
          throw 'City not found';
        }
        return res.results[0];
      })
    );
  }

  getWeatherByCoords(lat: number, lon: number, city: string): Observable<any> {
    return this.http.get<any>(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    ).pipe(
      map(res => ({
        city,
        temperature: res.current_weather.temperature,
        wind: res.current_weather.windspeed
      })),
      catchError(() => throwError(() => 'Weather data unavailable'))
    );
  }

}
