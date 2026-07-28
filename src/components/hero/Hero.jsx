import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <h1>
          Hey, I'm <span className="accent">Jakub Stożek</span>
        </h1>
        <p className="subtitle">Junior Full-Stack Developer</p>
        <p className="desc">
          I build websites and e-commerce commercially — WordPress plugins and
          Gutenberg blocks, PrestaShop modules and themes, and storefronts with
          Next.js + Payload CMS.
        </p>
      </div>
    </section>
  );
}

export default Hero;
