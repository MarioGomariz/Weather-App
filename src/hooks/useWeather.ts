import { useQuery } from '@tanstack/react-query';
import { getWeather, type WeatherSearchOptions } from '@/services/weatherService';
import type { Weather } from '@/types/weather';


export const useWeather = (options: WeatherSearchOptions | null) => {
    return useQuery<Weather | null, Error>({ 
        queryKey: ['weather',options], 
        queryFn: () => getWeather(options!),
        enabled: !!options,
        staleTime: 1000 * 60 * 5, 
        retry: 1, 
    });
}