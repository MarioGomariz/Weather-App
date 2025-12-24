interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
  disabled?: boolean;
  onLocationClick?: () => void;
  isGeoLoading?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Buscar por una ciudad...",
  disabled = false,
  onLocationClick,
  isGeoLoading = false,
}: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !disabled) {
      onSearch();
    }
  };

  return (
    <div className="weather-search-container">
      <span className="weather-search-icon">🔍</span>
      <input
        type="text"
        className="weather-search-bar"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={disabled}
      />
      {onLocationClick && (
        <button
          onClick={onLocationClick}
          disabled={isGeoLoading || disabled}
          className="weather-location-button"
          title="Usar ubicación actual"
        >
          {isGeoLoading ? "⌛" : "📍 GPS"}
        </button>
      )}
    </div>
  );
}
