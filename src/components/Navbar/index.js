import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      
        <div className={styles.links}>
            <div><Link href="#home">HOME</Link></div>
            <div><Link href="#about">ABOUT</Link></div>
            <div><Link href="#services">SERVICES</Link></div>
            <div><Link href="#experience">EXPERIENCE</Link></div>
            <div><Link href="#contact">CONTACT</Link></div>        
        </div>
  
    </div>
  )
}
