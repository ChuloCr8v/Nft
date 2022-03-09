import styles from "../../styles/Header.module.scss";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/NavBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const [scroll, setScrollY] = useState("");

  useEffect(() => {
    setScrollY(window.pageYOffset);
  }, []);

  let prevPos = scroll;

  const header = () => {
    let currentPos = window.pageYOffset;
    if (currentPos > prevPos) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    prevPos = currentPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", header);
    return () => {
      window.removeEventListener("scroll", header);
    };
  }, []);

  return (
    <header className={styles.header} id={showHeader && styles.hide_header}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.icon}
          id={showMenu && styles.rotate}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <NavBar showMenu={showMenu} showHeader={showHeader} />
      </div>
    </header>
  );
};

export default Header;
