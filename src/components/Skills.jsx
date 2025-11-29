import SkillCard from "./SkillCard";
import { skills } from "../data";

function Skills() {
  return (
    <section className="container py-5 ">
      <h2 className="fw-bold mb-4 text-primary">Skills</h2>
      <div className="row g-3 mt-5" >
        {skills.map(skill => (
          <div key={skill.id} className="col-6 col-md-4 col-lg-2">
            <SkillCard name={skill.name} color={skill.color} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
