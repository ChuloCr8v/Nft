import styles from "../styles/Menu.module.scss";
import Link from 'next/link'


const Menu = ({ setShowMenu}) => {
  return (
    <div className={styles.menu}>
      <Link href="/" className={styles.menu_item}>
        <a className={styles.menu_item} onClick={() => setShowMenu(false)}>
          Home
        </a>
      </Link>
      <Link href="/creators" className={styles.menu_item}>
        <a className={styles.menu_item} onClick={() => setShowMenu(false)}>
          Creators
        </a>
      </Link>
      <Link href="/nfts">
        <a className={styles.menu_item} onClick={() => setShowMenu(false)} >
          NFTs
        </a>
      </Link>
      <Link href="/blog" className={styles.menu_item}>
        <a className={styles.menu_item}  onClick={() => setShowMenu(false)}>
          Blog
        </a>
      </Link>
      <a href="mailto:Chulocr8v@gmail.com" className={styles.menu_item} id={styles.contact}>
        Contact
      </a>
    </div>
  );
};

export default Menu;
