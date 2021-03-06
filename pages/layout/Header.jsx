import styles from "../../styles/Header.module.scss";
import Menu from "../../components/Menu";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/NavBar";
import Link from 'next/link'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideHeader, sethideHeader] = useState(false);

  const [scroll, setScrollY] = useState("");

  useEffect(() => {
    setScrollY(window.pageYOffset);
  }, []);

  let prevPos = scroll;
  const header = () => {
    let currentPos = window.pageYOffset;
    if (currentPos > prevPos) {
      sethideHeader(true);
    } else {
      sethideHeader(false);
    }
    prevPos = currentPos;
  };
  

  useEffect(() => {
    window.addEventListener("scroll", header);
    return () => {
      window.removeEventListener("scroll", header);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowMenu(false) }) 
  },[]) 
  
  return (
    <header className={styles.header} id={hideHeader && styles.hide_header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/' className={styles.logo}>
            <a>
              Magnificent
            </a>
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.icon}
          id={showMenu && styles.rotate}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <NavBar showMenu={showMenu} setShowMenu = {setShowMenu} hideHeader={hideHeader} />
      </div>
    </header>
  );
};

export default Header;
