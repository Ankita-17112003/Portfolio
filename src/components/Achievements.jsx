import AchievementCard from "./AchievementCard";
import { achievements } from "../data";

function Achievements() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4 text-primary">Achievements</h2>
      <div className="row g-3">
        {achievements.map(item => (
          <div key={item.id} className="col-md-4">
            <AchievementCard achievement={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
