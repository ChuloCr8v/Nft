import styles from '../styles/TrendingNfts.module.scss'
import trendingNfts from './Nft'
import Heading from './Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const TrendingNfts = () => { 
  return ( 
      <section className={styles.trending_nfts}>
        <div className={styles.container}>
          <Heading title={'Trending Nfts'} subtitle={"Check out today's top Nfts"} />
          <div className={styles.nft_container}>
            {trendingNfts.map((nft) => (
            <div className={styles.nft_card}>
              <div className={styles.nft_img_container}>
                <img src={nft.image} alt="nft image" className={styles.nft_img}/>
                <div className={styles.likes_container} >
                <FontAwesomeIcon
                  icon = {faHeart} 
                  className={styles.icon}
                />
                  <p className={styles.likes}> {nft.likes} </p>
                </div>
              </div>
              <div className={styles.creator_details}>
                <div className={styles.creator_img_container}>
                  <img src={nft.creator_image} alt="nft image" className={styles.creator_img} />
                  <p className={styles.creator_name}> {nft.creator_name} </p>
                </div>
                  <p className={styles.availability}> {nft.availability} </p>
              </div>
              <h1 className={styles.name}>{nft.name} </h1>
              <div className={styles.price_place_bid_container}>
                <p className={styles.price}>{nft.price}</p>
                <button className={styles.place_bid_btn}> Place Bid </button>
              </div>
            </div>
            ))} 
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default TrendingNfts