interface ErrorStateProps {
  message?: string;
}

export default function ErrorState({
  message = "Unable to fetch weather data. Please try again.",
}: ErrorStateProps) {
  return (
    <div className="weather-error slide-in">
      <span className="weather-error-icon">⚠️</span>
      <div className="weather-error-content">
        <h4 className="weather-error-title">Error</h4>
        <p className="weather-error-message">{message}</p>
      </div>
    </div>
  );
}
