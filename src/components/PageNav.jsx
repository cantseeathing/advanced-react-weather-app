import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
