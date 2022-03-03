import styles from '../styles/Heading.module.scss'

const Heading = ({title, subtitle}) => { 
  return ( 
      <div className={styles.heading}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    ); 
  }; 
  
export default Heading