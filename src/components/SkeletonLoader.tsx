export default function SkeletonLoader() {
  return (
    <div className="weather-card">
      {/* Header Skeleton */}
      <div className="weather-card-header">
        <div className="h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-40 animate-pulse"></div>
        <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full animate-pulse"></div>
      </div>

      {/* Temperature Section Skeleton */}
      <div className="weather-main-temp">
        <div className="h-20 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-32 mb-3 animate-pulse"></div>
        <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-28 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-36 animate-pulse"></div>
      </div>

      {/* Details Grid Skeleton */}
      <div className="weather-details-grid">
        {[1, 2, 3].map((item) => (
          <div key={item} className="weather-detail-item">
            <div className="weather-detail-header">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse"></div>
              <div className="h-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-16 animate-pulse"></div>
            </div>
            <div className="h-7 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg w-20 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
