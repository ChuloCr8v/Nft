import styles from '../styles/TrendingCreators.module.scss'
import trendingCreators from './TrendingCreatorsData'
import Heading from './Heading'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

const TrendingCreators = () => { 
  
  useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return ( 
      <section className={styles.trending_creators}>
        <div className={styles.container}>
          <Heading title={'Trending Creators'} subtitle={"Check out today's top creators"} />
          <div className={styles.creators_container}>
              {trendingCreators.map((creator) => (
                <div key={creator.name} data-aos="fade-up" className={styles.creator_card}>
                   <div className={styles.creator_image_container}>
                     <img src={creator.image} className={styles.creator_image} />
                     <p className={styles.level}>{creator.level} </p>
                  </div>
                  <div className={styles.creator_details}>
                    <p className={styles.name}>{creator.name} </p>
                    <p className={styles.balance}>{creator.balance}</p>
                  </div>
                </div>
              )).slice(0, 4)}
          </div>
        <div className={styles.show_more_container}>
          <Link href="/creators">
            <a className={styles.btn}>
              Show more
            </a>
          </Link>
        </div>
        </div>
      </section>
    ); 
  }; 
  
export default TrendingCreators 