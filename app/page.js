import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Inputs from './components/inputs/Inputs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className={styles.backgroundTodo}>
    <div className={styles.fondoLibro}>
      <h1 className={styles.titulo}>Cuentos</h1>
      <Inputs />
    </div>
   </div>
  )
}
