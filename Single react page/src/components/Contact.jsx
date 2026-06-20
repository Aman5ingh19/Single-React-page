const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: "aman.singh@email.com",
    href: "mailto:alex.johnson@email.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/Aman Singh",
    href: "https://linkedin.com/in/alexjohnson",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Aman Singh",
    href: "https://github.com/alexjohnson",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="section-container">
        <h2 className="section-title">📬 Contact Me</h2>
        <p className="section-subtitle">Feel free to reach out — I'd love to connect!</p>
        <div className="contact-grid">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-card card"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">{item.icon}</span>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
