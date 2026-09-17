import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <a className="logo" href="#hero">Jakub Stożek</a>
      <ul className="links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
