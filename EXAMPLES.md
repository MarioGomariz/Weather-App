# Weather App - Component Usage Examples

This document shows how to use the CSS classes created for the weather app. All styles are in `index.css`.

## Color Scheme

The app uses a dark theme with **Tron: Ares Red** (#ff3a41) as the primary color.

### CSS Variables Available

```css
--primary: #ff3a41
--background: #0f0f0f
--background-card: #1e1e1e
--text-primary: #ffffff
--text-secondary: #a0a0a0
```

---

## Main App Layout

```tsx
<div className="weather-app-container">
  {/* Header */}
  {/* Search */}
  {/* Weather Cards */}
</div>
```

---

## Header Section

```tsx
<header className="weather-header">
  <h1 className="weather-header-title">Weather App</h1>
  <p className="weather-header-subtitle">Get real-time weather updates</p>
  
  <div className="weather-search-container">
    <span className="weather-search-icon">🔍</span>
    <input 
      type="text" 
      className="weather-search-bar"
      placeholder="Search for a city..."
    />
  </div>
</header>
```

**Features:**
- Gradient title with primary colors
- Icon positioned absolutely inside search container
- Smooth focus transitions with glow effect

---

## Main Weather Card

```tsx
<div className="weather-card">
  <div className="weather-card-header">
    <h2 className="weather-city-name">London</h2>
    <span className="weather-icon">☀️</span>
  </div>
  
  <div className="weather-main-temp">
    <p className="weather-temperature">24°</p>
    <p className="weather-condition">Sunny</p>
    <p className="weather-description">Clear sky</p>
  </div>
  
  <div className="weather-details-grid">
    {/* Detail items */}
  </div>
</div>
```

**Features:**
- Hover effect: lifts up with enhanced shadow
- Scale-in animation on mount
- Glassmorphism variant available with `.glassmorphism` class

---

## Weather Details

```tsx
<div className="weather-details-grid">
  <div className="weather-detail-item">
    <div className="weather-detail-header">
      <div className="weather-detail-icon">💧</div>
      <span className="weather-detail-label">Humidity</span>
    </div>
    <p className="weather-detail-value">
      65<span className="weather-detail-unit">%</span>
    </p>
  </div>
  
  <div className="weather-detail-item">
    <div className="weather-detail-header">
      <div className="weather-detail-icon">🌡️</div>
      <span className="weather-detail-label">Pressure</span>
    </div>
    <p className="weather-detail-value">
      1013<span className="weather-detail-unit">hPa</span>
    </p>
  </div>
  
  <div className="weather-detail-item">
    <div className="weather-detail-header">
      <div className="weather-detail-icon">💨</div>
      <span className="weather-detail-label">Wind Speed</span>
    </div>
    <p className="weather-detail-value">
      12<span className="weather-detail-unit">km/h</span>
    </p>
  </div>
</div>
```

**Features:**
- Auto-responsive grid (3 columns desktop → 2 columns mobile → 1 column small mobile)
- Hover effect: border changes to primary color
- Icon has primary-colored background with transparency

---

## Forecast Section

```tsx
<div className="weather-forecast-container">
  <h3 className="weather-forecast-title">5-Day Forecast</h3>
  
  <div className="weather-forecast-scroll">
    <div className="weather-forecast-item">
      <span className="weather-forecast-day">MON</span>
      <span className="weather-forecast-icon">⛅</span>
      <span className="weather-forecast-temp">22°</span>
      <span className="weather-forecast-temp-range">18° / 24°</span>
    </div>
    
    <div className="weather-forecast-item">
      <span className="weather-forecast-day">TUE</span>
      <span className="weather-forecast-icon">🌧️</span>
      <span className="weather-forecast-temp">19°</span>
      <span className="weather-forecast-temp-range">16° / 21°</span>
    </div>
    
    {/* More forecast items */}
  </div>
</div>
```

**Features:**
- Horizontal scroll with smooth behavior
- Each item is clickable with hover animation
- Minimum width ensures consistent sizing

---

## Buttons

### Primary Button

```tsx
<button className="weather-button">
  <span>Search</span>
  <span>🔍</span>
</button>
```

### Secondary Button

```tsx
<button className="weather-button weather-button-secondary">
  Cancel
</button>
```

### Icon Button

```tsx
<button className="weather-button-icon">
  ⭐
</button>
```

**Features:**
- Primary: Red background with glow on hover
- Secondary: Transparent with border
- Icon: Circular, minimal padding

---

## Loading State

```tsx
<div className="weather-loader-container">
  <div className="weather-loader"></div>
  <p className="weather-loader-text">Loading weather data...</p>
</div>
```

**Features:**
- Spinning animation
- Pulsing text

---

## Error State

```tsx
<div className="weather-error">
  <span className="weather-error-icon">⚠️</span>
  <div className="weather-error-content">
    <h4 className="weather-error-title">Error</h4>
    <p className="weather-error-message">
      Unable to fetch weather data. Please try again.
    </p>
  </div>
</div>
```

**Features:**
- Red semi-transparent background
- Slide-in animation

---

## Empty State

```tsx
<div className="weather-empty-state">
  <span className="weather-empty-icon">🌤️</span>
  <h3 className="weather-empty-title">No Location Selected</h3>
  <p className="weather-empty-description">
    Search for a city to see current weather conditions
  </p>
</div>
```

---

## Badges

```tsx
{/* Generic badge */}
<span className="weather-badge">LIVE</span>

{/* Weather condition badges */}
<span className="weather-badge sunny">Sunny</span>
<span className="weather-badge cloudy">Cloudy</span>
<span className="weather-badge rainy">Rainy</span>
<span className="weather-badge snowy">Snowy</span>
<span className="weather-badge stormy">Stormy</span>
```

---

## Status Indicators

```tsx
<span className="weather-status-dot good"></span> {/* Green */}
<span className="weather-status-dot moderate"></span> {/* Yellow */}
<span className="weather-status-dot poor"></span> {/* Red */}
```

**Features:**
- Pulsing animation
- Can be used for air quality, UV index, etc.

---

## Animation Classes

Add these classes to any element for entrance animations:

```tsx
<div className="fade-in">Fades in</div>
<div className="slide-in">Slides up</div>
<div className="scale-in">Scales from smaller</div>
```

---

## Glassmorphism Effect

Add to any card for a frosted glass effect:

```tsx
<div className="weather-card glassmorphism">
  {/* Content */}
</div>
```

---

## Responsive Breakpoints

- **Desktop**: Default styles
- **Tablet**: max-width 1024px
- **Mobile**: max-width 768px
- **Small Mobile**: max-width 480px

The grid automatically adapts:
- Desktop: 3 columns
- Mobile: 2 columns
- Small mobile: 1 column

---

## Complete Example

```tsx
import { useState } from 'react'

export default function App() {
  const [city, setCity] = useState('')
  
  return (
    <div className="weather-app-container">
      <header className="weather-header">
        <h1 className="weather-header-title">Weather App</h1>
        <p className="weather-header-subtitle">Real-time weather updates</p>
        
        <div className="weather-search-container">
          <span className="weather-search-icon">🔍</span>
          <input 
            type="text"
            className="weather-search-bar"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </header>
      
      <div className="weather-card scale-in">
        <div className="weather-card-header">
          <h2 className="weather-city-name">London</h2>
          <span className="weather-icon">☀️</span>
        </div>
        
        <div className="weather-main-temp">
          <p className="weather-temperature">24°</p>
          <p className="weather-condition">Sunny</p>
          <p className="weather-description">Clear sky</p>
        </div>
        
        <div className="weather-details-grid">
          <div className="weather-detail-item">
            <div className="weather-detail-header">
              <div className="weather-detail-icon">💧</div>
              <span className="weather-detail-label">Humidity</span>
            </div>
            <p className="weather-detail-value">
              65<span className="weather-detail-unit">%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## Tips

1. **Icons**: Use emoji or icon libraries (Lucide React, React Icons)
2. **Animations**: Components have built-in hover and entrance animations
3. **Colors**: Weather condition badges auto-color based on type
4. **Scrollbar**: Custom-styled to match dark theme
5. **Mobile**: All components are fully responsive
