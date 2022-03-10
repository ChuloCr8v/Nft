import React from "react";
import styles from "../styles/NavBar.module.scss";
import Menu from "./Menu";
const NavBar = ({ showMenu, setShowMenu,  hideHeader }) => {
  return (
    <nav className={styles.nav_bar}>
      <div className={styles.menu_container} id={showMenu && styles.show_menu}>
        <Menu showMenu = {setShowMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
