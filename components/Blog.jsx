 import styles from '../styles/Blog.module.scss' 
 import Heading from './Heading'
 import blogs from './BlogData'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
 const Blog = () => {
   
   useEffect(() => {
    Aos.init({duration: 500});
  })
   
   return (
     <section className={styles.blogs}>
      <div className={styles.container}>
        <Heading title={'Blogs on NFT market'} subtitle={'Read through our top trending stories on NFTs'} />
         <div className={styles.blogs_container}>
          {blogs.map((blog) => (
            <div  data-aos="zoom-out" className={styles.blog} key={blog.title}>
              <img src={blog.img} className={styles.blog_img} alt="nft news" />
              <h2  data-aos="fade-up" className={styles.blog_title}>{blog.title}</h2>
            </div>
          ))}
        </div>
      </div>
     </section>
   );
 };
 
 export default Blog

