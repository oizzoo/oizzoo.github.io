import "./About.css";
import profile from "../../assets/prflowe.jpg";
import BorderGradient from "../ui/BorderGradientPicture";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
            <BorderGradient> <img
              src={profile}
              alt="Jakub Stożek – zdjęcie profilowe"
              className="profile-photo"
              loading="lazy"
            /></BorderGradient>  
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Jakub Stożek, a junior full-stack developer. I work commercially
            on websites and e-commerce — custom WordPress plugins and Gutenberg
            blocks, PrestaShop modules and themes, and storefronts built with
            Next.js and Payload CMS.
          </p>
          <p>
            I switched to web development from logistics and have been learning
            by shipping real projects ever since — I enjoy understanding how
            things work under the hood, from frontend design to backend logic.
          </p>
          <p className="stack">
            <strong>Core:</strong> JavaScript/TypeScript · React · PHP · Node.js ·
            Express · PostgreSQL · HTML/CSS · Git
          </p>
          <p className="stack">
            <strong>CMS &amp; e-commerce:</strong> WordPress/Gutenberg ·
            PrestaShop · Docker (basics)
          </p>
          <p className="stack">
            <strong>Currently learning:</strong> Next.js · Payload CMS
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
