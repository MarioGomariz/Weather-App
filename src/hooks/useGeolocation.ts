import { useState } from 'react';

interface Coordinates {
  lat: number;
  lon: number;
}

interface GeolocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: boolean;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    isLoading: false,
  });

  const getLocation = () => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setState({
        coordinates: null,
        error: 'La geolocalización no está soportada en tu navegador',
        isLoading: false,
      });
      return;
    }

    // Set loading state
    setState({
      coordinates: null,
      error: null,
      isLoading: true,
    });

    // Get current position
    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        setState({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      // Error callback
      (error) => {
        let errorMessage = 'Error al obtener la ubicación';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Permiso de ubicación denegado. Por favor, permite el acceso a tu ubicación.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Información de ubicación no disponible';
            break;
          case error.TIMEOUT:
            errorMessage = 'Tiempo de espera agotado al obtener la ubicación';
            break;
        }

        setState({
          coordinates: null,
          error: errorMessage,
          isLoading: false,
        });
      },
      // Options
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return {
    ...state,
    getLocation,
  };
};
