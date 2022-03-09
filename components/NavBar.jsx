import React from "react";
import styles from "../styles/NavBar.module.scss";
import Menu from "./Menu";
const NavBar = ({ showMenu, showHeader }) => {
  return (
    <nav className={styles.nav_bar}>
      <div className={styles.menu_container} id={showMenu && styles.show_menu}>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
