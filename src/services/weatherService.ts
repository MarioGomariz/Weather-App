import type { Weather } from "@/types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5/"
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export type WeatherSearchOptions = 
  | { city: string }
  | { lat: number; lon: number }

export const getWeather = async (options: WeatherSearchOptions): Promise<Weather | null> => {
    let queryParams: string;
    
    if ('city' in options) {
        if (!options.city?.trim()) return null;
        queryParams = `q=${encodeURIComponent(options.city)}`;
    } else {
        queryParams = `lat=${options.lat}&lon=${options.lon}`;
    }
    
    try {
        const response = await fetch(
            `${BASE_URL}weather?${queryParams}&units=metric&appid=${API_KEY}`
        )
        
        if (!response.ok) {
            if (response.status === 404) {
                const searchTerm = 'city' in options ? options.city : `lat: ${options.lat}, lon: ${options.lon}`;
                throw new Error(`Ciudad "${searchTerm}" no encontrada. Verifique que la ciudad exista o verifique la ortografía.`)
            }
            if (response.status === 401) {
                throw new Error('Clave de API inválida. Por favor, verifique su configuración.')
            }
            throw new Error(`Error al obtener datos del clima (Error ${response.status})`)
        }
        
        const data = await response.json()
        return {
            city: data.name,
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`, 
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
        };
    } catch (error) {
        if (error instanceof Error) {
            throw error
        }
        throw new Error('Error al obtener datos del clima')
    }
}

