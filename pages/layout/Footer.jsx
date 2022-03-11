import styles from "../../styles/Footer.module.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FaTwitter, FaFacebook } from "react-icons";
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  
  useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.logo_container}>
           <div className={styles.logo}>
             <h1  data-aos="fade-left"  className={styles.logo}> Magnificent </h1>
           </div>
            <p data-aos="fade-up"  className={styles.description}>
              Magnificent is the place to get your hands on some of the most
              creative Nft arts.{" "}
            </p>
          </div>
          <div className={styles.footer_section} id={styles.col_2}>
            <h3 data-aos="fade-up"  className={styles.section_title}>Service </h3>
            <a href="#" data-aos="fade-left"  className={styles.footer_menu_item}>
              Create a store
            </a>
            <a href="#"  data-aos="fade-right" className={styles.footer_menu_item}>
              Start Selling
            </a>
            <a href="#" data-aos="fade-up"  className={styles.footer_menu_item}>
              My Account
            </a>
            <a href="#"  data-aos="fade-left" className={styles.footer_menu_item}>
              List an item
            </a>
          </div>
          <div className={styles.footer_section} id={styles.col_2}>
            <h3 data-aos="fade-up"  className={styles.section_title}>Community </h3>
            <a  data-aos="fade-up" href="#" className={styles.footer_menu_item}>
              Art
            </a>
            <a href="#" data-aos="fade-left" className={styles.footer_menu_item}>
              Digital Art
            </a>
            <a href="#"  data-aos="fade-right" className={styles.footer_menu_item}>
              Photography
            </a>
            <a href="#"  data-aos="fade-up"  className={styles.footer_menu_item}>
              Games
            </a>
            <a href="#"  data-aos="fade-left" className={styles.footer_menu_item}>
              Music
            </a>
          </div>
          <div className={styles.footer_section} id={styles.newsletter}>
            <h3 data-aos="fade-up"  className={styles.section_title}>Newsletter </h3>
            <form  data-aos="fade-left" action="/" method="POST" className={styles.form}>
              <input type="email" required placeholder="Your Email Address" />
              <input type="submit" value="Subscribe" />
            </form>
         {/*   <div className={styles.socials}>
              <FaTwitter className={styles.icon} />
              <FaFacebook className={styles.icon} />
            </div> */}
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
