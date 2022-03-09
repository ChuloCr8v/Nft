import React from "react";
import styles from "../styles/NavBar.module.scss";
import Menu from "./Menu";
const NavBar = ({ showMenu, hideHeader }) => {
  return (
    <nav className={styles.nav_bar} id={hideHeader && styles.hide_menu}>
      <div className={styles.menu_container} id={showMenu && styles.show_menu}>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;