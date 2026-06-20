import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Hobbies", id: "hobbies" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="brand-emoji">🎓</span>
        <span className="brand-name">Alex Johnson</span>
      </div>

      <button
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="nav-link"
            onClick={(e) => handleScroll(e, link.id)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
