function SkillCard({ name, color }) {
  return (
    <div className="card text-center  text-dark  p-3 mb-3 shadow" style={{ backgroundColor: color, color: "#fff" }}>
      <h5>{name}</h5>
    </div>
  );
}

export default SkillCard;
