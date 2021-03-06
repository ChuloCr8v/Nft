import styles from '../styles/Cta.module.scss'
import Link from 'next/link'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cta = () => { 
  
  useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return ( 
      <section  data-aos="flip-left" data-aos-delay="500" className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.cta_content_container}>
            <h1 className={styles.cta_heading}>Explore and Discover top Trending NFTs</h1>
            <p className={styles.cta_subheading} >Nft Diary is the place to get your hands on some of the most creative Nft arts.</p>
            <Link href="/nfts">
              <a className={styles.browse_nft_btn}>
                Browse NFTs
              </a>
            </Link>
          </div>
          <div className={styles.img_container}>
            <img src="/images/cta.png" alt="nft images" />
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default Cta