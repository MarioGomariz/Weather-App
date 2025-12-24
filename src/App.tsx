import { useState, useEffect } from "react";
import { useWeather } from "@/hooks/useWeather";
import { useDebounce } from "@/hooks/useDebounce";
import type { WeatherSearchOptions } from "@/services/weatherService";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import SkeletonLoader from "@/components/SkeletonLoader";
import ErrorState from "@/components/ErrorState";
import EmptyState from "@/components/EmptyState";
import { useGeolocation } from "@/hooks/useGeolocation";

export default function App() {
  const [inputCity, setInputCity] = useState<string>("");
  const [searchOptions, setSearchOptions] =
    useState<WeatherSearchOptions | null>(null);

  const { data, isLoading, isError, error } = useWeather(searchOptions);
  const {
    getLocation,
    coordinates,
    isLoading: isGeoLoading,
    error: geoError,
  } = useGeolocation();

  useEffect(() => {
    if (coordinates) {
      setSearchOptions({ lat: coordinates.lat, lon: coordinates.lon });
      setInputCity(""); // Opcional: limpiar el input al usar GPS
    }
  }, [coordinates]);

  const handleSearch = () => {
    if (inputCity.trim() && !isLoading) {
      setSearchOptions({ city: inputCity });
    }
  };

  const debouncedSearch = useDebounce(() => {
    if (inputCity.trim() && !isLoading) {
      setSearchOptions({ city: inputCity });
    }
  }, 1000);

  useEffect(() => {
    if (inputCity.trim()) {
      debouncedSearch();
    }
  }, [inputCity]);

  return (
    <div className="weather-app-container">
      <header className="weather-header">
        <h1 className="weather-header-title">Weather App</h1>
        <p className="weather-header-subtitle">
          Obtén actualizaciones en tiempo real del clima para cualquier ciudad
        </p>

        <SearchBar
          value={inputCity}
          onChange={setInputCity}
          onSearch={handleSearch}
          placeholder="Introduce el nombre de la ciudad (e.g., Madrid, Tokio, Nueva York)"
          disabled={isLoading || isGeoLoading}
          onLocationClick={getLocation}
          isGeoLoading={isGeoLoading}
        />
      </header>

      {isLoading && <SkeletonLoader />}

      {geoError && <ErrorState message={geoError} />}

      {isError && <ErrorState message={(error as Error).message} />}

      {!searchOptions && !isLoading && !isError && <EmptyState />}

      {data && !isLoading && !isError && <WeatherCard weather={data} />}
    </div>
  );
}
