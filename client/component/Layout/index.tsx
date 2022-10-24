import styles from './Layout.module.scss'
import Header from '../Header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('Layout')
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>{children}</div>
    </div>
  )
}
  
export default Layout