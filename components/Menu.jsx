import styles from "../styles/Menu.module.scss";
const Menu = ({ showMenu }) => {
  return (
    <nav className={showMenu ? styles.show_menu : styles.nav}>
      <div className={styles.menu}>
        <a href="/" className={styles.menu_item}>Home</a>
        <a href="/" className={styles.menu_item}>Creators</a>
        <a href="/" className={styles.menu_item}>Trending NFTs</a>
        <a href="/" className={styles.menu_item}>Blog</a>
      </div>
    </nav>
  );
};

export default Menu;
