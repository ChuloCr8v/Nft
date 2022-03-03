import styles from '../styles/TrendingCreators.module.scss'
import trendingCreators from './TrendingCreatorsData'
import Heading from './Heading'
const TrendingCreators = () => { 
  return ( 
      <section className={styles.trending_creators}>
        <div className={styles.container}>
          <Heading title={'Trending Creators'} subtitle={"Check out today's top creators"} />
          <div className={styles.creators_container}>
              {trendingCreators.map((creator) => (
                <div className={styles.creator_card}>
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