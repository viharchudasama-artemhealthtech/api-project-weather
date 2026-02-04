# Weather App

A simple Angular 17 application that allows users to search for current weather conditions by city name.

## Features

- **City Search**: Resolve city names to geographic coordinates.
- **Current Weather**: Display real-time temperature and wind speed for the selected location.
- **Integration**: Uses the [Open-Meteo](https://open-meteo.com/) free weather API (no API key required).

## Tech Stack

- **Framework**: Angular 17 (Standalone Components)
- **Language**: TypeScript
- **Styling**: CSS
- **HTTP Client**: Angular `HttpClient`
- **Reactive Programming**: RxJS (`switchMap`, `map`, `catchError`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Run the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Building

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

- `src/app/components/weather`: Contains the main weather display logic and UI.
- `src/app/services/weather.service.ts`: Handles API communication with Open-Meteo services.

## API Usage

This project uses the following Open-Meteo endpoints:
- **Geocoding**: `https://geocoding-api.open-meteo.com/v1/search`
- **Forecast**: `https://api.open-meteo.com/v1/forecast`
