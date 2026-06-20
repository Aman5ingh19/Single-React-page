export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="about-card card">
          <div className="about-avatar" aria-label="Student avatar">
            👨‍💻
          </div>
          <div className="about-content">
            <h1 className="about-name">Aman Singh</h1>
            <p className="about-tagline">Computer Science Student · Full-Stack Enthusiast</p>
            <div className="about-badges">
              <span className="badge">📍 Gurugram, India</span>
              <span className="badge">🎓 B.Tech CS · 3rd Year</span>
              <span className="badge">🏫 K.R Mangalam University</span>
            </div>
            <p className="about-bio">
              Hey there! I'm Aman, a passionate Computer Science student with a love for
              building clean, user-friendly web applications. I enjoy solving real-world
              problems through code and am always eager to learn new technologies. When
              I'm not coding, you'll find me exploring open-source projects or reading
              about system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
