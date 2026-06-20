export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          © {year} Aman Singh · All rights reserved
        </p>
        <p className="footer-made">
          Made with <span className="heart">❤️</span> using React + Vite
        </p>
      </div>
    </footer>
  );
}
