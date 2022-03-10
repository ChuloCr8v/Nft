 import styles from '../styles/Categories.module.scss' 
 import Heading from './Heading'
 import categories from './Nft'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
 import { faUser, faShoppingCart, faBarChart, faWallet } from '@fortawesome/free-solid-svg-icons'

 const Categories = () => {
   
   const catCategory = categories.filter((category) => {
     return category.category === "cat"
   })
   const abstractCategory = categories.filter((category) => {
     return category.category === "abstract"
   })
   const monkeyCategory = categories.filter((category) => {
     return category.category === "monkey"
   })
   
   return (
     <section className={styles.categories}>
      <div className={styles.container}>
        <Heading title={'NFTs Categories'} subtitle={'Browse our trending Nft categories'} />
         <div className={styles.content_container}>
          <div className={styles.categories_container}>
            <div className={styles.category_card_container}>
              <div className={styles.category_card}>
                {catCategory.map((category) => (
                  <img src={category.image} className={styles.category_img}  key={category.name}/>
                ))}
              </div>
              <div className={styles.category_details}>
                <h2 className={styles.category_title}>Cyber Kitties NFTs </h2>
                <p className={styles.category_subtitle}>200 Resourses</p>
              </div>
            </div>
            <div className={styles.category_card_container}>
              <div className={styles.category_card}>
                {abstractCategory.map((category) => (
                  <img src={category.image} className={styles.category_img} key={category.name}/>
                ))}
              </div>
              <div className={styles.category_details}>
                <h2 className={styles.category_title}>Abstract NFTs </h2>
                <p className={styles.category_subtitle}>180 Resourses</p>
              </div>
            </div>
            <div className={styles.category_card_container}>
              <div className={styles.category_card}>
                {monkeyCategory.map((category) => (
                  <img src={category.image} key={category.name} className={styles.category_img} />
                ))}
              </div>
              <div className={styles.category_details}>
                <h2 className={styles.category_title}>Cyber Monkeys NFTs </h2>
                <p className={styles.category_subtitle}>500 Resourses</p>
              </div>
            </div>
          </div>
          <div className={styles.features_container}>
            <div className={styles.features_card}>
                <FontAwesomeIcon
                  icon = {faUser} 
                  className={styles.icon}
                />
                <h1 className={styles.feature_title}>Discover artists and creators</h1>
                <p className={styles.feature_subtitle}>Enjoy beautiful digital artworks by talented artists from around the world.</p>
            </div>
            <div className={styles.features_card}>
                <FontAwesomeIcon
                  icon = {faShoppingCart} 
                  className={styles.icon1}
                />
                <h1 className={styles.feature_title}>buy and sell your NFTs</h1>
                <p className={styles.feature_subtitle}>Easily buy and sell your NFTs in the largest marketplace.</p>
            </div>
            <div className={styles.features_card}>
                <FontAwesomeIcon
                  icon = {faBarChart} 
                  className={styles.icon2}
                />
              <h1 className={styles.feature_title}>Grow your digital arts collection</h1>
                <p className={styles.feature_subtitle}>Add new, trending and rare arts to your collection.</p>
            </div>
            <div className={styles.features_card}>
                <FontAwesomeIcon
                  icon = {faWallet} 
                  className={styles.icon3}
                />
                <h1 className={styles.feature_title}>Earn money by trading NFTs</h1>
                <p className={styles.feature_subtitle}>Get paid by selling Nfts with secured payment methods.</p>
            </div>
          </div>
        </div>
      </div>
     </section>
   );
 };
 
 export default Categories
 
 