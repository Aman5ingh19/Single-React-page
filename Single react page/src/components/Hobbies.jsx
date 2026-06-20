const hobbies = [
  { emoji: "📚", title: "Reading", description: "Tech blogs, sci-fi novels, and self-help books" },
  { emoji: "🎮", title: "Gaming", description: "Strategy and puzzle games in my spare time" },
  { emoji: "🎵", title: "Music", description: "Playing guitar and discovering indie artists" },
  { emoji: "🏃", title: "Running", description: "Morning runs to stay fit and clear my mind" },
  { emoji: "✈️", title: "Travelling", description: "Exploring new cities and cultures whenever I can" },
  { emoji: "🖼️", title: "Photography", description: "Capturing moments with my DSLR on weekends" },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="section-container">
        <h2 className="section-title">🎯 Hobbies &amp; Interests</h2>
        <p className="section-subtitle">What I love doing outside of class</p>
        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <article key={hobby.title} className="hobby-card card">
              <span className="hobby-emoji">{hobby.emoji}</span>
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-desc">{hobby.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
