import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Portfolio</h2>
      <ul className="links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
