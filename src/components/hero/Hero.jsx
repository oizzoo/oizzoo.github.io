import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <h1>
          Hey, I'm <span className="accent">Jakub Stożek</span>
        </h1>
        <p className="subtitle">Full-Stack Developer in progress</p>
        <p className="desc">
          I build modern, clean, and responsive web apps — always learning,
          improving, and pushing forward.
        </p>
      </div>
    </section>
  );
}

export default Hero;
