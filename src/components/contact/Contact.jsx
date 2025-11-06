import { motion } from "framer-motion";
import {useState} from "react";
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "stozjakub@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  };


  const links = [
    {
      name: "GitHub",
      href: "https://github.com/oizzoo",
      svg: (
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.55v-2c-3.2.69-3.88-1.55-3.88-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.11-.76.41-1.28.74-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.23 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.65.8.54A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jakub-stożek-0a464636a",
      svg: (
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.84-2.2 3.79-2.2 4.05 0 4.8 2.67 4.8 6.15V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.04-3.03 4.15V24h-4V8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>

      <p>Let’s connect! you can find me here:</p>


      <div className="contact-links">
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.svg}
            <span>{link.name}</span>
          </motion.a>
        ))}
      </div>

      <p className="hint">(click the email to copy)</p>
      <div className="email-box" onClick={handleCopy}>
        <p>{email}</p>
        {copied && <span className="copied-msg">Copied!</span>}
      </div>
    </section>
  );
}

export default Contact;
