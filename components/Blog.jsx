 import styles from '../styles/Blog.module.scss' 
 import Heading from './Heading'
 import blogs from './BlogData'
 
 const Blog = () => {
   
   return (
     <section className={styles.blogs}>
      <div className={styles.container}>
        <Heading title={'Blogs on NFT market'} subtitle={'Read through our top trending stories on NFTs'} />
         <div className={styles.blogs_container}>
          {blogs.map((blog) => (
            <div className={styles.blog} key={blog.title}>
              <img src={blog.img} className={styles.blog_img} alt="nft news" />
              <h2 className={styles.blog_title}>{blog.title}</h2>
            </div>
          ))}
        </div>
      </div>
     </section>
   );
 };
 
 export default Blog

