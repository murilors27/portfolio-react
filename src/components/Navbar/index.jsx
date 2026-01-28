import styles from "./Navbar.module.css";

function Navbar({ title }) {
  return (
    <nav className={styles.Navbar}>
      <h1 className={styles.Title}>{title}</h1>
      <div>
        <ul className={styles.NavbarItems}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
