import styles from '../styles/Heading.module.scss'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Heading = ({title, subtitle}) => { 
  
  useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return ( 
      <div data-aos="fade-up" className={styles.heading}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    ); 
  }; 
  
export default Heading