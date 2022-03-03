import Header from './Header.jsx'

const Layout = ({children}) => { 
  return ( 
      <section >
        <Header />
        {children} 
      </section>
    ); 
  }; 
  
export default Layout