const skills = [
  { name: "HTML & CSS", level: "Advanced", icon: "🌐", color: "#e34c26" },
  { name: "JavaScript", level: "Intermediate", icon: "⚡", color: "#f7df1e" },
  { name: "React.js", level: "Intermediate", icon: "⚛️", color: "#61dbfb" },
  { name: "Python", level: "Advanced", icon: "🐍", color: "#306998" },
  { name: "Node.js", level: "Beginner", icon: "🟢", color: "#68a063" },
  { name: "Git & GitHub", level: "Intermediate", icon: "🐙", color: "#f05032" },
  { name: "SQL", level: "Intermediate", icon: "🗄️", color: "#00758f" },
  { name: "Data Structures", level: "Advanced", icon: "🧠", color: "#8b5cf6" },
];

const levelColor = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444",
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-container">
        <h2 className="section-title">🛠️ Skills</h2>
        <p className="section-subtitle">Technologies &amp; tools I work with</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card card">
              <span className="skill-icon">{skill.icon}</span>
              <h3 className="skill-name">{skill.name}</h3>
              <span
                className="skill-level"
                style={{ backgroundColor: levelColor[skill.level] }}
              >
                {skill.level}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
