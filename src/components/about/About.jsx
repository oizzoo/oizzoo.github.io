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
            I'm Jakub Stożek, a self-taught developer with a background in
            logistics, now fully focused on web development. I enjoy learning how things work under the
            hood — from frontend design to backend logic.
          </p>
          <p className="stack">
            <strong>Tech stack:</strong> TypeScript · React · JavaScript (ES6+) · Node.js ·
            Express · PostgreSQL · HTML · CSS · Git 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
