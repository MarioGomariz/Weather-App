export default function EmptyState() {
  return (
    <div className="weather-empty-state fade-in">
      <span className="weather-empty-icon">🌤️</span>
      <h3 className="weather-empty-title">No Location Selected</h3>
      <p className="weather-empty-description">
        Search for a city to see current weather conditions and forecasts
      </p>
    </div>
  );
}
