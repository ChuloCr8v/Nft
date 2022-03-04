import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import TrendingCreators from '../components/TrendingCreators'
import TrendingNfts from '../components/TrendingNfts'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="NFT VERSE" content="Your top Nft spot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <TrendingNfts />
      <TrendingCreators />
    </div>
  ) 
}