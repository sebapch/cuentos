import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Inputs from './components/inputs/Inputs'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className={styles.backgroundTodo}>
    <div className={styles.fondoLibro}>
      <div>
      <h1 className={styles.titulo}>Cuentos mágicos</h1>
{/*       <Link href="/about"><h1 className={styles.titulo}>Padres</h1></Link>
 */}      </div>
      <Inputs />
    </div>
   </div>
  )
}
