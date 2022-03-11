import styles from '../styles/TrendingCreators.module.scss'
import Heading  from '../components/Heading'
import trendingCreators from '../components/TrendingCreatorsData'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TrendingCreators = () => { 
  
  useEffect(() => {
    Aos.init({duration: 500});
  })
  
  return ( 
      <section className={styles.trending_creators}>
        <div className={styles.container}>
         <Heading title={'NFT Creators'} />
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
              ))}
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default TrendingCreators 