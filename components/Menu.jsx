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
          Trending NFTs
        </a>
      </Link>
      <Link href="/blog" className={styles.menu_item}>
        <a className={styles.menu_item} onClick>
          Blog
        </a>
      </Link>
      <button className={styles.menu_item} id={styles.contact}>
        Contact
      </button>
    </div>
  );
};

export default Menu;
