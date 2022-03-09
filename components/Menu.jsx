import styles from "../styles/Menu.module.scss";
const Menu = (/*{ showMenu }*/) => {
  return (
    <div className={styles.menu}>
      <a href="/" className={styles.menu_item}>
        Home
      </a>
      <a href="/" className={styles.menu_item}>
        Creators
      </a>
      <a href="/" className={styles.menu_item}>
        Trending NFTs
      </a>
      <a href="/" className={styles.menu_item}>
        Blog
      </a>
      <a href="/" className={styles.menu_item} id={styles.contact}>
        Contact
      </a>
    </div>
  );
};

export default Menu;
