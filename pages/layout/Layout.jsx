import styles from '../../styles/Layout.module.scss'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => { 
  return ( 
      <section className={styles.layout} >
        <Header />
        {children} 
        <Footer/>
      </section>
    ); 
  }; 
  
export default Layout