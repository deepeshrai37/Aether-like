const statsData = [
  { id: 1, label: 'Consultations', value: '5,000+' },
  { id: 2, label: 'Total Doctors', value: '1,200+' },
  { id: 3, label: 'Treatments', value: '300' },
  { id: 4, label: 'Average Rating', imageUrl: 'data:image/png;base64,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' },
];

export const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-image">
        <img src="src\assets\WhatsApp Image 2024-06-11 at 10.42.59.jpeg" alt="Background" />
      </div>
      <div className="stats-card">
        <div className="stats-grid">
          {statsData.map(stat => (
            <div key={stat.id} className="stat-item">
            {stat.imageUrl ? (
                <img src={stat.imageUrl} alt="Google 5-star rating" className="rating-image" />
              ) : (
                <>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </>
              )}
        </div>
          ))}
      </div>
    </div>
    </div>
  );
};