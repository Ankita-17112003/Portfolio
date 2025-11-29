function AchievementCard({ achievement }) {
  return (
    <div className="card p-3 mb-3 shadow h-100">
      <h5 className="fw-bold">{achievement.title}</h5>
      <p>{achievement.organization}</p>
    </div>
  );
}

export default AchievementCard;
