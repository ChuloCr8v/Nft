import styles from "../../styles/Header.module.scss";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}  >Logo</div>
        <FontAwesomeIcon
          icon = {faBars} 
          className={styles.icon}
          id={showMenu && styles.rotate}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </div>
      <Menu showMenu={showMenu} />
    </header>
  );
};

export default Header;
