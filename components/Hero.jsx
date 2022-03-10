import styles from '../styles/Hero.module.scss'
import axios from "axios"; 
import {useState, useEffect} from 'react'
import Nft from './Nft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Hero = () => { 
  return ( 
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.hero_content_container}>
            <small className={styles.small}>Collectibles Nfts </small>
            <h1 className={styles.hero_heading}>Find Trending NFTs Auctions and buy timeless artworks</h1>
            <p className={styles.hero_subheading} > A much simpler Nft market that offers extraordinary original artwork by artists and an ideal place for collectors </p>
             <Link href="/nfts">
              <a className={styles.browse_nft_btn}>
                Browse NFTs
              </a>
            </Link>
          </div>
          <div className={styles.nft_container}>
            {Nft.map((token) => (
            <div key={token.name} className={styles.nft_card}>
              <div className={styles.nft_img_container}>
                <img src={token.image} alt="nft image" className={styles.nft_img}/>
                <div className={styles.likes_container} >
                <FontAwesomeIcon
                  icon = {faHeart} 
                  className={styles.icon}
                />
                  <p className={styles.likes}> {token.likes} </p>
                </div>
                <p className={styles.time}>{token.time}</p>
              </div>
              <h1 className={styles.name}>{token.name} </h1>
              <div className={styles.price_place_bid_container}>
                <p className={styles.price}>{token.price}</p>
                <button className={styles.place_bid_btn}> Place Bid </button>
              </div>
            </div>
            )).slice(0, 1)} 
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default Hero