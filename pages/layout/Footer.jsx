import styles from "../../styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.logo_container}>
            <h1> Logo </h1>
            <p className={styles.description}>
              Nft Diary is the place to get your hands on some of the most
              creative Nft arts.{" "}
            </p>
          </div>
          <div className={styles.footer_section} id={styles.col_2}>
            <h3 className={styles.section_title}>Service </h3>
            <a href="#" className={styles.footer_menu_item}>
              Create a store
            </a>
            <a href="#" className={styles.footer_menu_item}>
              Start Selling
            </a>
            <a href="#" className={styles.footer_menu_item}>
              My Account
            </a>
            <a href="#" className={styles.footer_menu_item}>
              List an item
            </a>
          </div>
          <div className={styles.footer_section} id={styles.col_2}>
            <h3 className={styles.section_title}>Community </h3>
            <a href="#" className={styles.footer_menu_item}>
              Art
            </a>
            <a href="#" className={styles.footer_menu_item}>
              Digital Art
            </a>
            <a href="#" className={styles.footer_menu_item}>
              Photography
            </a>
            <a href="#" className={styles.footer_menu_item}>
              Games
            </a>
            <a href="#" className={styles.footer_menu_item}>
              Music
            </a>
          </div>
          <div className={styles.footer_section} id={styles.newsletter}>
            <h3 className={styles.section_title}>Newsletter </h3>
            <form action="/" method="POST" className={styles.form}>
              <input type="email" required placeholder="Your Email Address" />
              <input type="submit" value="Subscribe" />
            </form>
            <div className={styles.socials}>
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.footer_credits}>
          <p className={styles.credits}>
            {" "}
            UI/UX by <span>Qoreebullah </span> & Development by{" "}
            <span>
              <a href="https://devc.tech"> Devc.tech</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
