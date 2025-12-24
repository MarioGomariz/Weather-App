import type { Weather } from "@/types/weather";

interface WeatherCardProps {
  weather: Weather;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2 className="weather-city-name">{weather.city}</h2>
        <img
          src={weather.icon}
          alt={weather.description}
          className="weather-icon"
        />
      </div>

      <div className="weather-main-temp">
        <p className="weather-temperature">{weather.temperature}°</p>
        <p className="weather-condition">{weather.condition}</p>
        <p className="weather-description">{weather.description}</p>
      </div>

      <div className="weather-details-grid">
        <div className="weather-detail-item">
          <div className="weather-detail-header">
            <div className="weather-detail-icon">💧</div>
            <span className="weather-detail-label">Humedad</span>
          </div>
          <p className="weather-detail-value">
            {weather.humidity}
            <span className="weather-detail-unit">%</span>
          </p>
        </div>

        <div className="weather-detail-item">
          <div className="weather-detail-header">
            <div className="weather-detail-icon">🌬️</div>
            <span className="weather-detail-label">Velocidad del viento</span>
          </div>
          <p className="weather-detail-value">
            {weather.windSpeed}
            <span className="weather-detail-unit">m/s</span>
          </p>
        </div>

        <div className="weather-detail-item">
          <div className="weather-detail-header">
            <div className="weather-detail-icon">🌡️</div>
            <span className="weather-detail-label">Presión</span>
          </div>
          <p className="weather-detail-value">
            {weather.pressure}
            <span className="weather-detail-unit">hPa</span>
          </p>
        </div>
      </div>
    </div>
  );
}
